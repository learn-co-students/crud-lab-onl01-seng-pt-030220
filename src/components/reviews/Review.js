import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;
    return (
      <div>
        <li>
          {review.text}
          <button  onClick={(e) => this.props.deleteReview(this.props.review)}> X </button>
        </li>
                      
      </div>
    );
  }

};

export default Review;
