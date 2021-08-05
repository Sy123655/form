import React, { Component } from "react";
import ValidationForm from "./components/ValidationForm";



class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <ValidationForm />
      </div>
    );
  }
}

export default App;
