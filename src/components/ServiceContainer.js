import React from "react";
import ServicePackage from "./ServicePackage";
import ServiceLogo from "./ServiceLogo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ServiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderServicePackages = () => {
    let servicePackageList = [];
    for (const servP of this.props.servicePackages) {
      servicePackageList.push(
        <ServicePackage
          serviceName={this.props.serviceName}
          title={servP.title}
          body={servP.body}
        />
      );
    }
    return servicePackageList;
  };

  render() {
    return (
      <Container className="service-container">
        <Row>
          <Col></Col>
          <Col md={6}>
            <ServiceLogo src={this.props.logoSrc} />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div className="service-packages-container">
              {this.renderServicePackages()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ServiceContainer;
