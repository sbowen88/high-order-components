import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import PeopleHOC from "./People";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res => {
      this.setState({
        people: res.data.results
      });
    });
  }

  render() {
    return (
      <div className="App">
        <PeopleHOC
          loading={this.state.people.length ===0}
          people={this.state.people}
        />
      </div>
    );
  }
}

export default App;
