import React, { Component } from 'react';

// HOC - a function that takes a component as an argument and returns a new component

export default function loadingHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          { this.props.loading ? '...loading' : <WrappedComponent {...this.props} />}
        </div>
      )
    }
  }
}