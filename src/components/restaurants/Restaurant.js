import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleClick = (event) => {
    event.preventDefault()
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={event => this.handleClick(event)}> X </button>
          <ReviewsContainer restaurant={restaurant} reviews={this.props.reviews} addReview={this.props.addReview} deleteReview={this.props.deleteReview}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
