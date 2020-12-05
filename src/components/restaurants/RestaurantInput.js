import React, { Component } from 'react';

class RestaurantInput extends Component {

  state={
    text:''
  }

  onChange = event => {
    this.setState({
      text:event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text) 
    this.setState({
      text:'' 
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={(event)=> {this.onSubmit(event)}}>
      <label>
        Restaurant Name:
        <input type="text" onChange={(event) => this.onChange(event)} value={this.state.text}/>
      </label>
      <input type="submit"/>
    </form>
      </div>
    );
  }
};

export default RestaurantInput;
