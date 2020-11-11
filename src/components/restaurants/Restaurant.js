import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    
    const { text , id } = this.props.restaurant ;
    return (
      <div>
        <li>
            <div> 
              {text}
              <button onClick={(e) => this.props.deleteRestaurant(this.props.restaurant) }> X </button>
                   <ReviewsContainer restaurant={this.props.restaurant}/>

            </div>
        </li>
 
      </div>
    );
  }
};

export default Restaurant;
