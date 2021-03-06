import React from "react";
import Button from "./components/button/Button";
import "./App.css";
import Modal from './components/modal/modal'
import CustomInput from './components/custom-input/custom-input'


class App extends React.Component {

  state = {
    isOpened: false,
    address: ''
  }

  
  handleClick = () => {
    this.setState({isOpened: !this.state.isOpened})
  }
 

  handleOnChange = e => {
    this.setState({
      address: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="button">
          <Button font="courier new" handleClick={this.handleClick}>Submit</Button>
        </div>
        <CustomInput type="password" label="address" value={this.address} onChange={this.handleOnChange} style={{margin: '0 auto'}} />
        
        <Modal style={{ margin: '0px auto'}} isOpened={this.state.isOpened}>
         <Modal.Header>Header</Modal.Header>
         <Modal.Body>Body</Modal.Body>
         <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
