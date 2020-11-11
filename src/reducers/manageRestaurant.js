import cuid from 'cuid';
import {combineReducers}  from 'redux'

const rootReducer  = combineReducers({
    restaurants: restaurantsReducer,
    reviews:  reviewsReducer
})

export default rootReducer;

function  restaurantsReducer(state=[],action){
       
     switch(action.type){
        case'ADD_RESTAURANT':

            let restaurant={
                id: cuid(),
                text: action.restaurant
            }
           // return { ...state, restaurants: [ ...state.restaurants,restaurant]}
           return [ ...state,restaurant]

        case 'DELETE_RESTAURANT':
           //  return {restaurants: state.restaurants.filter(resturant => resturant != action.id) }
            return [...state.filter(resturant => resturant != action.id) ]

        default:

          return state
    }

}

function  reviewsReducer(state=[],action){
    switch(action.type){
       case'ADD_REVIEW':

        let review=Object.assign({},action.review,{id:cuid()})
        return [...state, review]
       
       case 'DELETE_REVIEW':

          return [...state.filter(review=> review  !=  action.id) ]
  
        default:
          return state

    }

}


