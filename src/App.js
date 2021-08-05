import React, { Component } from "react";
import LoginForm from "./components/ValidationForm";




class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <h1>Login Form Reactjs with AntDesgin</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;
