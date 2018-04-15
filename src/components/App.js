import React from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

class App extends React.Component {
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

function mapStateToProps(state) {
  console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);