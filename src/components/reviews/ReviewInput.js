import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let payload = {
      restaurantId: this.props.restaurantId,
      text: this.state.text
    }
    this.props.addReview(payload)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
