import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return{...state, restaurants: [...state.restaurants, { id: cuid(), text: action.text }]}
        case "DELETE_RESTAURANT":
            return{...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case "ADD_REVIEW":
            return{...state, reviews: [...state.reviews, {restaurantId: action.review.restaurantId, id: cuid(), text: action.review.text}]}
        case "DELETE_REVIEW":
            return{...state, reviews: state.reviews.filter(review => review.id !== action.id)}    
            default:
            return state
    }
}
