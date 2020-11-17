import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li >
          {restaurant.text} 
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>   
          <ReviewsContainer restaurantId={restaurant.id}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

// class Restaurant extends Component {


//   render() {
//     const { restaurant } = this.props;

//     return (
//       <div>
//         <li>
//           {restaurant.text}
//           <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
//           <ReviewsContainer restaurant={restaurant}/>
//         </li>
//       </div>
//     );
//   }
// };

// export default Restaurant;
