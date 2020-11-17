import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import manageRestaurant from './reducers/manageRestaurantAndReviews';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/manageRestaurant'


const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import manageRestaurant from './reducers/manageRestaurant';
// // import allReducer from './reducers';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// // import rootReducer from './reducers/manageRestaurant';

// const store = createStore(manageRestaurant,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// document.getElementById('root')
// );
