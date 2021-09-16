import React from "react";
import beastData from "./data.json";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Main extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row md={3}>
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
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: 0,
    };
  }

  render() {
    return (
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={this.props.imgSrc} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button
            onClick={() =>
              this.setState({ favorites: this.state.favorites + 1 })
            }
            variant="primary"
          >
            &hearts; {this.state.favorites}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Main;
