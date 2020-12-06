import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;
    // console.log(this.props)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={(e) => this.props.deleteRestaurant(this.props.restaurant.id)}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
