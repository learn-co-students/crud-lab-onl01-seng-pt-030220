import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  // reviewRender = () => {
    
  // }

  render() {
    // console.log(this.props)
    return (
      <ul>
        {this.props.reviews.map( review => {
          if ( review.restaurantId == this.props.restaurantId ) {
              return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
                }
                }
            )
        }
      </ul>
    );
  }
};

export default Reviews;