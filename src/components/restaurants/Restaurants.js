
import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
        })}
      </ul>
    );
  }
};

export default Restaurants;

// import React, { Component } from 'react';
// import Restaurant from './Restaurant'

// class Restaurants extends Component {
  
//   // renderRestaurant = () => {
//   //   return this.props.restaurants.map( res => <Restaurant key={res.id} restaurant={res} deleteRestaurant={this.props.deleteRestaurant} />)
//   // }

//   render() {
//     // console.log(this.props)
//     return(
//       <ul>
//         {/* {this.renderRestaurant()} */}
//         {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview}/>)}
//       </ul>
//     );
//   }
// };

// export default Restaurants;