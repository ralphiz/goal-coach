import React from 'react';
import { firebaseApp } from '../firebase';

export default class App extends React.Component {
  signOut() {
    firebaseApp.auth().signOut()
  }

  render() {
    return(
      <div>
        <h1>I'm the App component</h1>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}