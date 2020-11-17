import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => dispatch({ type: "ADD_RESTAURANT", text}),
    deleteRestaurant: (id) => dispatch({ type: "DELETE_RESTAURANT", id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

// import React, { Component } from 'react';
// import RestaurantInput from '../components/restaurants/RestaurantInput';
// import Restaurants from '../components/restaurants/Restaurants';
// import { connect } from 'react-redux'

// class RestaurantsContainer extends Component {

//   render() {
//     return (
//       <div>
//         <RestaurantInput addRestaurant={this.props.addRestaurant}/>
//         {/* <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/> */}
//         <Restaurants restaurants={this.props.restaurants} reviews={this.props.reviews} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} deleteReview={this.props.deleteReview}/>
//       </div>
//     )
//   }
// }

// // const mapStateToProps = ({ restaurants }) => ({ restaurants})
// const mapStateToProps = (state) => {
//   return {restaurants: state.restaurants, reviews: state.reviews}
// }

// const mapDispatchToProps = dispatch => ({
//   addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text}),
//   deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id}),
//   addReview: (payload) => dispatch({type: "ADD_REVIEW", review: {restaurantId: payload.restaurantId, text: payload.text}}),
//   deleteReview: (id) => dispatch({type: "DELETE_REVIEW", id})
// })

// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
