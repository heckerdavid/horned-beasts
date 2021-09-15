import { Component } from 'react';
import beastData from './data.json';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Main extends Component {
  
  render() {
    return (
      <Container>
        <h1>Main is maining</h1>
        <Row>
          <Col>
        <HornedBeasts
          imgSrc={beastData[0].image_url}
          alt={beastData[0].keyword}
          title={beastData[0].title}
          description={beastData[0].description}
        />
          </Col>
          <Col>
        <HornedBeasts
          imgSrc={beastData[1].image_url}
          alt={beastData[1].keyword}
          title={beastData[1].title}
          description={beastData[1].description}
        />
          </Col>
          <Col>
        <HornedBeasts
          imgSrc={beastData[2].image_url}
          alt={beastData[2].keyword}
          title={beastData[2].title}
          description={beastData[2].description}
        />
          </Col>
        </Row>
        <Row>
          <Col>
        <HornedBeasts
          imgSrc={beastData[3].image_url}
          alt={beastData[3].keyword}
          title={beastData[3].title}
          description={beastData[3].description}
        />
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

class HornedBeasts extends Component {

  constructor(props) {
    super(props)

    this.state = {
      favorites: 0
    }
  }

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Image
          src={this.props.imgSrc}
          alt={this.props.alt}
          title={this.props.title}
          onClick={() => this.setState({ favorites: this.state.favorites + 1 })}
        />
        <p>&hearts; {this.state.favorites}</p>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default Main;