import React from "react";
import Register from "../Components/Auth/Register/Register.js";
import LogIn from "../Components/Auth/LogIn/LogIn.js";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "30px"
          }}
        >
          <button>Register account</button>
          <button>Log in</button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "30px"
          }}
        >
          <Register />
          <LogIn />
        </div>
      </React.Fragment>
    );
  }
}

export default AuthPage;
