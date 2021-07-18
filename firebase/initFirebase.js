import firebase from "firebase/compat/app";

import { getAnalytics } from 'firebase/analytics';
import { getAuth, useAuthEmulator } from 'firebase/auth';
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

if (typeof window !== 'undefined') {
  // Enable analytics
  if ('measurementId' in firebaseConfig) {
    const analytics = getAnalytics();
  }
}

var auth = getAuth();
useAuthEmulator(auth, "http://localhost:9099");

var db = app.firestore();
db.useEmulator("localhost", 8080);


console.log("Firebase is initialised");
export { db };