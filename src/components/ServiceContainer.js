import React from "react";
import ServicePackage from "./ServicePackage";
import ServiceLogo from "./ServiceLogo";

class ServiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderServicePackages() {
    let servicePackageList = [];
    for (const servP of this.props.servicePackages) {
      servicePackageList.push(
        <ServicePackage title={servP.title} body={servP.body} />
      );
    }
    return servicePackageList;
  }

  render() {
    return (
      <div className="service-container">
        <ServiceLogo src={this.props.logoSrc} />
        {/* {renderServicePackages()} */}
      </div>
    );
  }
}

export default ServiceContainer;
