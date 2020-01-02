import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "b"
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
  handleSubmit = (event) =>{
        console.log(`${this.state.username} ${this.state.topic}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option>Select</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
