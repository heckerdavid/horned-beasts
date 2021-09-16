import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import beastData from "./data.json";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header header="Horns" />
        <Main beastData={beastData} />
        <Footer footer="Made by David, Brains by Hexx" />
      </div>
    );
  }
}

export default App;
