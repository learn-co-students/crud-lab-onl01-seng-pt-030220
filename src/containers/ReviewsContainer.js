import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    debugger 
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview:(review) => dispatch({type:"ADD_REVIEW", review}), 
    deleteReview:(id) => dispatch({type:'DELETE_REVIEW', id })
  }
}

const mapStateToProps = ({reviews}) => ({reviews})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer) 
