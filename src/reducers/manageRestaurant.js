import cuid from 'cuid';


export default function manageRestaurants(state = [] , action) {

    switch(action.type){
        case "ADD_RESTAURANT":
        let newRestaurant = {
            id: cuid(),
            text:action.text
        }
        return [...state,newRestaurant]
        

        default:
            return state
    }

}
