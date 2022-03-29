import React, { Component } from 'react';
import { connect } from "react-redux"
import { createStore } from 'redux';

class CreateTodo extends Component {

  constructor(){
    super()
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: "ADD_TODO", payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input 
              type="text" 
              placeholder="add todo" 
              onChange={(event) => this.handleChange(event)}
              />
            <input type="submit" />
          </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (FormData) => dispatch({type: "ADD_TODO", payload: FormData})
//   }
// }

export default connect()(CreateTodo)
