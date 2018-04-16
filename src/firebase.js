import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCRkR4myiOdD1LLZpLmY-Avxis000cT0TE",
  authDomain: "goal-coach-cccb4.firebaseapp.com",
  databaseURL: "https://goal-coach-cccb4.firebaseio.com",
  projectId: "goal-coach-cccb4",
  storageBucket: "",
  messagingSenderId: "743018077019"
}

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals')