import cuid from 'cuid'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})
export default rootReducer

function manageRestaurants(state = [], action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = {
        id: cuid(),
        text: action.text
      }
      return [...state, restaurant]

    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id)

    default:
      return state
  }
}

function manageReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      let review = {...action.review, id: cuid()}
      return [...state, review]

    case 'DELETE_REVIEW':
      return state.filter(review => review.id !== action.id)
    default:
      return state
  }
}

// // import { combineReducers } from 'redux';
// import cuid from 'cuid';

// // const rootReducer = combineReducers({
// //   restaurants: manageRestaurants,
// //   reviews: manageReviews
// // });

// // export default rootReducer;

// export default function manageRestaurants(state = {
//   restaurants: [],
//   reviews: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_RESTAURANT':
//       const restaurant = {  
//         id: cuid(),
//         text: action.text
//       }
//       return {...state, restaurants: [...state.restaurants, restaurant] };

//     case 'DELETE_RESTAURANT':

//       return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

//       case 'ADD_REVIEW':
//         const review = {  
//           id: cuid(),
//           text: action.review.text,
//           restaurantId: action.review.restaurantId
//         }
//         return {...state, reviews: [...state.reviews, review] };

//         case 'DELETE_REVIEW':

//           return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

//     default:
//       return state;
//   }
// }

// function manageReviews(state = {
//   reviews: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_REVIEW':
//       const review = {  
//         id: cuid(),
//         text: action.text,
//         restaurantId: action.restaurantId
//       }
//       return {...state, reviews: [...state.reviews, review] };

//     case 'DELETE_REVIEW':

//       return {reviews: state.reviews.filter(review => review.id !== action.id)}

//     default:
//       return state;
//   }
// }
