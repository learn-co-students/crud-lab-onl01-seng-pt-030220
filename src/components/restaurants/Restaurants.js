import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {console.log(this.props.restaurants)}
      </ul>
    );
  }
};

export default Restaurants;