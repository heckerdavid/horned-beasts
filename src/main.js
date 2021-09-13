import { Component } from 'react';

class Main extends Component {
  
  render() {
    return (
      <>
        <h1>Main is maining</h1>
        <HornedBeasts
          imgSrc="https://place-hold.it/300x500"
          alt="Horned Image"
          title="idk horned title"
        />
        <HornedBeasts
          imgSrc="https://place-hold.it/300x500"
          alt="Horned Image"
          title="idk horned title"
        />
      </>
    );
  }
}

class HornedBeasts extends Component {

  render() {
    return (
      <>
        <h2>Horned title</h2>
        <img
          src={this.props.imgSrc}
          alt={this.props.alt}
          title={this.props.title}
        />
        <p>p description of the beast</p>
      </>
    );
  }
}

export default Main;