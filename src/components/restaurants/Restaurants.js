import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

export default Restaurants;