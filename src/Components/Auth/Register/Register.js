import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { providers, firebaseAppAuth } from "../../../firebaseProvider.js";
import * as firebase from "firebase/app";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.passwordRepeatInput = React.createRef();
    this.state = {
      emailValue: "",
      passwordValue: "",
      passwordRepeatValue: "",
      logInfo: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        emailValue: this.emailInput.current.value,
        passwordValue: this.passwordInput.current.value,
        passwordRepeatValue: this.passwordRepeatInput.current.value
      },
      () => {
        this.focusEmailInput();
        this.focusPasswordInput();
        this.focusPasswordRepeatInput();
        this.signup();
      }
    );
  };

  focusEmailInput() {
    this.emailInput.current.focus();
  }

  focusPasswordInput() {
    this.passwordInput.current.focus();
  }

  focusPasswordRepeatInput() {
    this.passwordRepeatInput.current.focus();
  }

  signup() {
    const email = this.state.emailValue;
    const password = this.state.passwordValue;
    const passwordRepeat = this.state.passwordRepeatValue;

    if (email.length < 6) {
      this.setState({
        logInfo: "Please enter an email address at least 6 characters long"
      });
      return;
    }
    if (password.length < 6) {
      this.setState({
        logInfo: "Please enter a password at least 6 characters long"
      });
      return;
    }
    if (passwordRepeat !== password) {
      this.setState({
        logInfo: "Repeat the same password"
      });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          logInfo: "Succesful registration!"
        });
        return;
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);

        if (errorCode == "auth/weak-password") {
          this.setState({
            logInfo: "The password is too weak"
          });
          return;
        }
        if (errorCode == "auth/email-already-in-use") {
          this.setState({
            logInfo: "Email is already in use"
          });
          return;
        }
        if (errorCode == "auth/invalid-email") {
          this.setState({
            logInfo: "Invalid email"
          });
          return;
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>email</label>
        <br />
        <input
          type="email"
          ref={this.emailInput}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <label>password</label>
        <br />
        <input
          type="password"
          ref={this.passwordInput}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <label>repeat password</label>
        <br />
        <input
          type="password"
          ref={this.passwordRepeatInput}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <p>{this.state.logInfo}</p>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Register);
