import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews =() => {
    const relevantReviews = this.props.reviews.filter((review) => review.restaurantId === this.props.restaurantId)
    return relevantReviews.map((review) => <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />)
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;