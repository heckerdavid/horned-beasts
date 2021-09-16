import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
     </div>
    );

  }
}

export default App;
