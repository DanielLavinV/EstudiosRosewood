import React, { Children } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class SectionContainer extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Container
        fluid
        style={
          this.props.srcImg
            ? { backgroundImage: `url(${this.props.srcImg})` }
            : {}
        }
        id={this.props.id}
        className="section-container"
      >
        <Row>
          <Col></Col>
          <Col md={this.props.midColSize} sm={12}>
            {this.props.children}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default SectionContainer;
