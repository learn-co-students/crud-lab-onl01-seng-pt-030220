import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput

// import React, { Component } from 'react';
// import Reviews from './Reviews';

// class ReviewInput extends Component {

//   state = {
//     text: '',
//   }

//   onChange = (e) => {
//     this.setState({
//       text: e.target.value
//     })
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     // this.props.addReview(this.state.text, this.props.restaurant.id);
//     // this.setState({text: ''})
//     let payload = {
//       restaurantId: this.props.restaurantId,
//       text: this.state.text
//     }
//     this.props.addReview(payload)
//     this.setState({
//       text: ''
//     })
//   }

//   render() {
//     // console.log(this.state)
//     // console.log(this.props)
//     return (
//       <div>
//          <form onSubmit={this.onSubmit}>
//           <input type="text" name="text" onChange={this.onChange} value={this.state.text}/>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// };

// export default ReviewInput;
