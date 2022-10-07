import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      select: "react",
    };
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
  }
  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  changeTextHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  changeTopicHandler = (event) => {
    this.setState({
      select: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.select} ${this.state.comments}`);
  };
  render() {
    const {username,select,comments}=this.state;//Destructuring this.state object
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={username}
            onChange={this.changeUsernameHandler}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            cols="30"
            rows="5"
            onChange={this.changeTextHandler}
          ></textarea>
        </div>
        <div>
          <label>Topic : </label>
          <select value={select} onChange={this.changeTopicHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Forms;
