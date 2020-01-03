import React, { Component } from "react";
import "./Form.css";

const initialState = {
  username: "",
  nameError: "",
  passwordError: "",
  password: "",
  topic: "react"
};
class Forms extends Component {
  state = initialState;

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };
  handlePwd = event => {
    this.setState({
      password: event.target.value
    });
  };
  validate = () => {
    let nameError = "";
    // let passwordError= "";
    if (!this.state.username.includes("@")) {
      nameError = "Invalid Email";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear Form
      this.setState(initialState);
    }
  };
  render() {
    const { username, topic, pwd } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />

            <span className="error-msg">{this.state.nameError}</span>
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              value={topic}
              onChange={this.handleTopicChange}
              className="form-control"
            >
              <option>Select</option>
              <option value="a">Angular</option>
              <option value="react">React</option>
              <option value="c">Vue</option>
            </select>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              value={pwd}
              onChange={this.handlePwd}
            />
            <span className="error-msg">{this.state.passwordError}</span>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
