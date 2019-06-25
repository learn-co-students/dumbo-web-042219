import React, { Component } from 'react';

class SubmitForm extends Component {
  state = {
    text: ''
  }

  handleTextInput = (e) => {
    console.log(e.target.value);

    this.setState({
      text: e.target.value
    })
  }

  render() {
    console.log("SubmitForm state", this.state);
    return (
      <form>
        <input type="file" />
        <input type="text" onChange={this.handleTextInput} value={this.state.text} />

        <input type="submit" value="Send!" />
      </form>
    );
  }

}

export default SubmitForm;
