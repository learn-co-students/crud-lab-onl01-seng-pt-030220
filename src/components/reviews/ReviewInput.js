import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {


  state={
    text:'',
    restaurantId:''
  }


  handleChange=(e)=>{
     this.setState({
       text: e.target.value,
       restaurantId: this.props.restaurantId
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
       this.props.addReview(this.state)
  }


  render() {
    return (
      <div>
       <form   onSubmit={(e)=>this.handleSubmit(e) }>
        <input  type="text" name="name" onChange={(e)=>this.handleChange(e)} /> 
        <input  type="submit" />
       </form>
      </div>
    );
  }
};

export default ReviewInput;
