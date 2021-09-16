import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Main extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row md={3} lg={4} xl={5}>
          {this.props.beastData.map((horn, idx) => <HornedBeasts data={horn} key={idx}/>)}
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
        <Card.Img variant="top" src={this.props.data.image_url} />
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.description}</Card.Text>
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
