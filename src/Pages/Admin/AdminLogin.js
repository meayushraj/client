import React from "react";
import AdminDash from "./AdminDash";

class AdminLogin extends React.Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <h1>Give Your Login Details</h1>
        <label class="form-label" style={{ fontSize: "20px" }}>
          EMAIL_ID
        </label>
        <input
          className="form-control form-control-lg"
          placeholder="E-mail"
          type="email"
          autocomplete="off"
          name="email"
        />
        <label class="form-label" style={{ fontSize: "20px" }}>
          PASSWORD
        </label>
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="E-mail"
          autocomplete="off"
          name="password"
        />
        <br />
        <br />
        <button style={{ float: "right" }} className="ui massive green button">
          Login
        </button>
      </div>
    );
  }
}
export default AdminLogin;
