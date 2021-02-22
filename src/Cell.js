import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    console.log(this.props.color)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}