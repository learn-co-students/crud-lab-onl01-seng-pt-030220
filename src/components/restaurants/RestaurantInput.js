import React, { Component } from 'react';

class RestaurantInput extends Component {

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
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event)=> {this.handleOnSubmit(event)}}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => {this.handleOnChange(event)}}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

// import React, { Component } from 'react';

// class RestaurantInput extends Component {

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
//     this.props.addRestaurant(this.state.text);
//     this.setState({text: ''})
//   }

//   render() {
//     // console.log(this.state.text)
//     return (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" name="text" onChange={this.onChange} value={this.state.text}/>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// };

// export default RestaurantInput;
