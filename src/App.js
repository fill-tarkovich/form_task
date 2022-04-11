import { Component } from "react";
import View from "./View";
import Form from "./Form";
import Popup from "./Popup";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    return (
      <main>
        <Form change={this.inputHandler} submit={this.popupHandler} />
        <View {...this.state.inputData} />
        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.popupHandler} />
        )}
      </main>
    );
  }
}

export default App;
