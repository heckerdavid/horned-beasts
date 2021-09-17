import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import beastData from "./data.json";
import BeastModal from './components/modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: beastData[0],
      showModal: false,
    };
  }

  updateSelected = (newSelection) => {
    this.setState({ selectedBeast: newSelection });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Header header="Horns" />
        <Main
          beastData={beastData}
          updateSelected={this.updateSelected}
          showModal={this.showModal}
        />
        <Footer footer="Made by David, Brains by Hexx/Sara/Audrey" />
        <BeastModal
          data={this.state.selectedBeast}
          hideModal={this.hideModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}
