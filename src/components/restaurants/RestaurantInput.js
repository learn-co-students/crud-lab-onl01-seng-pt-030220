import React, { Component } from 'react';
// import { connect } from 'react-redux';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input 
          type='text'
          value={this.state.text}
          onChange={this.handleOnChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};


// const mapStateToProps = ({restaurants}) => ({restaurants})


// const mapDispatchToProps = (dispatch) => {
//   return { addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', restaurant}),
//   deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id}) 
// }
// }


export default RestaurantInput;
