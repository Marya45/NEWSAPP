import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center my-3">
        <div class="spinner-border text-dark text-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}

export default Spinner
