import { Component } from "react";
import View from "./View";
import Form from "./Form";
import Popup from "./Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <main>
        <Form />
        <View />
        <Popup />
      </main>
    );
  }
}

export default App;
