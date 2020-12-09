import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input name="text" value={this.state.text} onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
