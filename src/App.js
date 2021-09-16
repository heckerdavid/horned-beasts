import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import beastData from "./data.json";
import Card from "react-bootstrap/Card";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedBeast: null
    }
  }

  updateSelected = (newSelection) => {this.setState({selectedBeast: newSelection}); };

  render() {
    return (
      <div>
        <Header header="Horns" />
        <Modal data={this.state.selectedBeast}/>
        <Main beastData={beastData} updateSelected={this.updateSelected}/>
        <Footer footer="Made by David, Brains by Hexx/Sara" />
      </div>
    );
  }
}


class Modal extends React.Component {

  render() {
    return (
      <Card style={{ width: "35rem" }}>
        <Card.Img
          variant="top"
          src={this.props.data}
        />
        <Card.Body>
          <Card.Title>title</Card.Title>
          <Card.Text>text</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
