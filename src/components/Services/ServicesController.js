import ServicesNavbar from "./ServicesNavbar";
import ServicePackage from "./ServicePackage";
import ServiceLogo from "./ServiceLogo";
import ServiceContainer from "./ServiceContainer";
import SectionContainer from "../SectionContainer";
import React from "react";

import BlackwoodsRecordsLogo from "../../images/LOGOBLACKWOOD1.png";
import ROESLogo from "../../images/ROESFOTO.png";
import AyMariaLogo from "../../images/AyMariaLogo4.png";
import Dorado from "../../images/Dorado.jpg";
import WoodTexture from "../../images/textura_sample.jpg";

const PLACEHOLDER_PACKAGE_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
eget elementum mauris mi vel est.";
const SERVICE_NAME_ROES_PHOTOGRAPHY = "roes";
const SERVICE_NAME_BLACKWOODS_RECORDS = "blackwoods";
const SERVICE_NAME_AYMARIA_MAKEUP = "aymaria";

class ServicesController extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      activeIndex: 0,
    };
  }

  handleOptionClick = (index) => {
    this.setState({ activeIndex: index });
  };

  renderServices() {
    let serviceList = [];
    for(const serv of this.props.services) {
      serviceList.push(
        <SectionContainer
          key={serv.name}
          id={serv.sectionContainerId}
          srcImg={serv.backgroundImg}
          midColSize={12}
        >
          <SectionContainer
            midColSize={8}
          >
            <ServiceContainer 
              logoSrc={serv.logoSrc}
              serviceName={serv.name}
              servicePackages={serv.packages}
              isActive={this.state.activeIndex === this.props.services.indexOf(serv)}
            />
          </SectionContainer>
        </SectionContainer>
      );
    }
    return serviceList;
  }

  render() {
    return (
      <div>
        <SectionContainer id="services-navbar-container">
          <ServicesNavbar
            activeItem={this.state.activeIndex}
            onClick={this.handleOptionClick}
            options={this.props.navbarOptions}
          />
        </SectionContainer>
        {this.renderServices()}
      </div>
    );
  }
}

export default ServicesController;
