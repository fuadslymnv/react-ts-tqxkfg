import React, { Component } from 'react';
import ReactDom from 'react';

class Forum extends Component {
  state = {
    color: 'green',
    name: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state?.name);
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <label htmlFor="name">
          Name:{' '}
          <input
            name="name"
            id="name"
            value={this.state?.name}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}

export default Forum;
