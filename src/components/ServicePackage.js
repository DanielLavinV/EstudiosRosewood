import React from "react";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";

class ServicePackage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Card style={{width: "20rem"}} className={`service-package service-package-${this.props.serviceName}`}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
              {this.props.body}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ServicePackage;
