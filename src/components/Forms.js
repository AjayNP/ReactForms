import React, { Component } from "react";
import "./Form.css";
class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email:"",
      nameError:"",
      emailError:"",
      passwordError:"",
      password: "",
      topic: "react"
    };
  }

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
  handleSubmit = event => {
    console.log(`${this.state.username} ${this.state.password} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, topic, pwd } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              value={pwd}
              onChange={this.handlePwd}
            />
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
