import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ reviews: state.reviews})

const mapDispatchToProps = dispatch => {
  return{
    deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id}),
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', review})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
