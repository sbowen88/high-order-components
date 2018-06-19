import React, { Component } from "react";

export default function LoadingHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div style={{}}>
          {this.props.loading ? "...loading" : <WrappedComponent {...this.props} />}
        </div>
      );
    }
  };
}
