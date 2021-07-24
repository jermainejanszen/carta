import { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

interface Props {
  children?;
}

const UserContext = createContext(null);

const UserProvider = (props: Props) => {
  const user = useProvideUser();
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export class Task {
  name: string;
  time: number;
  completed: boolean;

  constructor(name: string, time: number, completed: boolean) {
    this.name = name;
    this.time = time;
    this.completed = completed;
  }
}

export class Project {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  unsubscribe: () => void;

  constructor(id: string, ref: firebase.firestore.DocumentReference) {
    if (id) {
      this.id = id;
    } else if (ref) {
      this.id = ref.id;
    }
  }

  equals = (project: Project): boolean => {
    return this.id === project.id;
  };

  loadFields = async () => {
    if (!firebase.auth().currentUser) {
      return null;
    }

    this.unsubscribe = firebase
      .firestore()
      .collection('projects')
      .doc(this.id)
      .onSnapshot((doc) => {
        if (doc.data()) {
          const docData = doc.data();
          this.name = docData.name;
          this.description = docData.description;
          if (!this.tasks) {
            this.tasks = [];
            for (let i = 0; i < docData.tasks.length; i++) {
              const { name, time, completed } = docData.tasks[i];
              this.tasks.push(new Task(name, time, completed));
            }
          }
        }
      });
  };

  destroy = () => {
    this.unsubscribe();
  };
}

class User {
  bio: string;
  company: string;
  stats: {
    projectsCompleted: number;
    tasksCompleted: number;
    totalTime: number;
  };
  website: string;
  projects: Project[];
  unsubscribe: () => void;

  loadFields = async () => {
    if (!firebase.auth().currentUser) {
      return null;
    }

    this.unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        if (doc.data()) {
          const docData = doc.data();
          this.bio = docData.bio;
          this.company = docData.company;
          this.stats = docData.stats;
          this.website = docData.website;
          if (!this.projects) {
            this.projects = [];
            for (let i = 0; i < docData.projects.length; i++) {
              const newProject = new Project(null, docData.projects[i]);
              newProject.loadFields();
              this.projects.push(newProject);
            }
          }
        }
      });
  };

  destroy = () => {
    for (let i = 0; i < this.projects.length; i++) {
      const element = this.projects[i];
      element.destroy();
    }
    this.unsubscribe();
  };
}

const useProvideUser = () => {
  // Store the user in state
  const [user, setUser] = useState<User>(null);
  if (firebase.apps.length) {
    if (!user && firebase?.auth().currentUser) {
      const newUser = new User();
      newUser.loadFields();
      setUser(newUser);
    }
  }

  const signinWithGoogle = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const newUser = new User();
      newUser.loadFields();
      setUser(newUser);
      return true;
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      return false;
    }
  };

  const signinWithGitHub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => setUser(null));
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        if (user) {
          user.destroy();
        }
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(() => {
      if (!firebase.auth().currentUser) {
        console.log('called');
        if (user) {
          user.destroy();
        }
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGoogle,
    signinWithGitHub,
    signout,
  };
};

export default UserProvider;
