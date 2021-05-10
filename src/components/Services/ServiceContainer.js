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
    // let width = 90 / this.props.servicePackages.length
    let width = 95
    for (const servP of this.props.servicePackages) {
      servicePackageList.push(
        <Col>
        <ServicePackage
          key={servP.title}
          maxWidth={width}
          serviceName={this.props.serviceName}
          title={servP.title}
          price={servP.price}
          body={servP.body}
          backgroundImg={servP.backgroundImg}
        />
        </Col>
      );
    }
    return (
      <Row>
        {servicePackageList}
      </Row>
    );
  };

  isActive(){
    return this.props.isActive ? "active" : "";
  }

  render() {
    return (
      <Container className={"service-container "+this.isActive()}>
        <Row>
          <Col></Col>
          <Col lg={6} sm={12}>
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
