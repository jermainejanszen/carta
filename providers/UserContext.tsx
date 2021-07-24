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

const useProvideUser = () => {
  // Store the user in state
  const [user, setUser] = useState<firebase.User>(null);
  
  const signinWithGoogle = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      setUser(result.user);
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
      .then((response) => setUser(response.user));
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(null));
  };
  
  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(() => {
      setUser(firebase.auth().currentUser)});
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
