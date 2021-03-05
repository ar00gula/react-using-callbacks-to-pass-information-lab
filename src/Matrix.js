import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "#FFF"
    }
  }

  //i've bound this to the Matrix component by using an arrow function so that when I use setSelectedColor as a callback, it updates the state of the matrix component
  setSelectedColor = (newColor) => {
    return this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell selectedColor={this.state.selectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}