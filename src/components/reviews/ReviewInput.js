import React, { Component } from 'react';

class ReviewInput extends Component {

  state ={
    text:''
  }

  onChange = (event) =>{
    this.setState({
      text: event.target.value
    }
    )
  }

  onSubmit= (event) => {
    event.preventDefault();
    const review = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addReview(review);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={(event) => this.onSubmit(event)}>
      <input type="text" name="review" onChange={(event) => this.onChange(event)} value={this.state.text} />
      <input type="submit" value="Submit" onChange={(event) => this.onChange(event)} />
    </form>
      </div>
    );
  }
};

export default ReviewInput;
