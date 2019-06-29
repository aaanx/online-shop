import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { providers, firebaseAppAuth } from "../../../firebaseProvider.js";
import * as firebase from "firebase/app";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      emailValue: "",
      passwordValue: "",
      logInfo: "INFO"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        emailValue: this.emailInput.current.value,
        passwordValue: this.passwordInput.current.value
      },
      () => {
        this.focusEmailInput();
        this.focusPasswordInput();
        this.login();
      }
    );
  };

  focusEmailInput() {
    this.emailInput.current.focus();
  }

  focusPasswordInput() {
    this.passwordInput.current.focus();
  }

  // login
  login() {
    const email = this.state.emailValue;
    const password = this.state.passwordValue;

    if (password.length < 6) {
      this.setState({
        logInfo: "Please enter a password at least 6 characters long"
      });
      return;
    } else {
      this.setState({
        logInfo: ""
      });
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        window.location = "http://localhost:3000/";
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === "auth/invalid-email") {
          this.setState({
            logInfo: "Wrong email format"
          });
          console.log(errorMessage);
          return;
        }

        if (errorCode === "auth/user-not-found") {
          this.setState({
            logInfo: "User not found"
          });
          console.log(errorMessage);
          return;
        }

        if (errorCode === "auth/wrong-password") {
          this.setState({
            logInfo: "Wrong password"
          });
          console.log(errorMessage);
          return;
        }
      });
  }

  //// log-out
  logout() {
    firebase
      .auth()
      .signOut()
      .then(function() {})
      .catch(function(error) {
        let errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  //// reset password
  resetPassword() {
    const auth = firebase.auth();
    const email = this.state.emailValue;

    auth
      .sendPasswordResetEmail(email)
      .then(function() {
        this.setState({
          logInfo: "Email reset link sent"
        });
      })
      .catch(function(error) {
        let errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <br />
          <input
            type="email"
            defaultValue={this.state.emailValue}
            ref={this.emailInput}
            style={{ marginBottom: "10px" }}
          />
          <br />
          <label>password</label>
          <br />
          <input
            type="password"
            defaultValue={this.state.passwordValue}
            ref={this.passwordInput}
            style={{ marginBottom: "10px" }}
          />
          <br />
          <p>{this.state.logInfo}</p>
          <button type="submit">Log in</button>
        </form>
      </React.Fragment>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(LogIn);
