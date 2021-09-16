import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Main extends React.Component {


  updateSelected = (newSel) => {
    this.props.updateSelected(newSel);
  }  

  render() {
    return (
      <Container fluid>
        <Row md={3} lg={4} xl={5}>
          {this.props.beastData.map((horn, idx) => (
            <HornedBeasts
              data={horn}
              key={idx}
              updateSelected={this.updateSelected}
            />
          ))}
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
      newSelectedBeast: null,
    };
  }

  updateSelected = () => this.props.updateSelected(this.state.newSelectedBeast);

  handleClick = () => {
    this.setState({newSelectedBeast: this.props.data.image_url})
    this.updateSelected()
  }

  render() {
    return (
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={this.props.data.image_url} 
        onClick={this.handleClick}
        />
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
