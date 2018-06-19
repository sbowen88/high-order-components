import React, { Component } from "react";

export default class CollapseRenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      open_styles: {
        maxHeight: "100px",
        opacity: 1,
        transition: "0.3 all ease-out"
      },
      closed_styes: {
        maxHeight: 0,
        opacity: 0,
        transition: "0.3 all ease-out"
      }
    };
  }

  render() {
    return (
      <div>
        <div>
          <p>
            {this.props.title}
            <span onClick={()=>this.setState({collapsed:!this.state.collapsed})}>{this.state.collapsed ? "...more" : "...less"}</span>
          </p>
        </div>
        {this.props.children(
          this.state.collapsed
            ? this.state.closed_styes
            : this.state.open_styles
        )}
      </div>
    );
  }
}
