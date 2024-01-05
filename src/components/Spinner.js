import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center my-3">
        <div className="spinner-border text-dark text-center" role="status">
        </div>
      </div>
    )
  }
}

export default Spinner
