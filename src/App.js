import React from "react";
import NavBar from "./components/NavBar";
import SectionContainer from "./components/SectionContainer";
import Logo from "./components/Logo";
import ServicesNavbar from "./components/Services/ServicesNavbar";
import ServiceContainer from "./components/Services/ServiceContainer";
import ServicesController from "./components/Services/ServicesController";

// file imports
// import EstudiosRWLogo from "./images/ROSEWOODROSA.png";
// import EstudiosRWLogo from "./images/ROSEWOODSINMADERA.png";
// import EstudiosRWLogo from "./images/ROSEWOODVERTICAL.png";
import EstudiosRWLogo from "./images/ROSEWOODREDONDO.png";
import BlackwoodsRecordsLogo from "./images/LOGOBLACKWOOD1.png";
import ROESLogo from "./images/ROESFOTO.png";
import AyMariaLogo from "./images/AyMariaLogo4.png";
import Dorado from "./images/Dorado.jpg";
import WoodTexture from "./images/textura_sample.jpg";
import RosewoodFondoNegro from "./images/ROSEWOODROSAFONDONEGRO.png";

//constants
const SERVICE_NAME_ROES_PHOTOGRAPHY = "roes";
const SERVICE_NAME_BLACKWOODS_RECORDS = "blackwoods";
const SERVICE_NAME_AYMARIA_MAKEUP = "aymaria";
const PLACEHOLDER_PACKAGE_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
eget elementum mauris mi vel est.";

//midColSize = size of the middle column, according to Bootstrap's col sizes
function App() {
  return (
    <div id="container">
      <NavBar imgSrc={RosewoodFondoNegro} id="main-navbar" />
      <SectionContainer id="logo-container" midColSize={8}>
        <Logo src={EstudiosRWLogo} />
      </SectionContainer>
      {/* Services container */}
      <SectionContainer id="services-container" midColSize={12}>
        {/* parent container to pass info from navbar to service containers */}
        <ServicesController
          navbarOptions={[
            "Blackwood's Records",
            "Photography by ROES",
            "Makeup by #AYMARIA",
          ]}
          services={[
            {
              sectionContainerId: `${SERVICE_NAME_BLACKWOODS_RECORDS}-section-container`,
              logoSrc: BlackwoodsRecordsLogo,
              name: SERVICE_NAME_BLACKWOODS_RECORDS,
              packages: [
                {
                  title: "Paquete 1",
                  body: PLACEHOLDER_PACKAGE_TEXT,
                  backgroundImg: WoodTexture,
                },
                {
                  title: "Paquete 2",
                  body: PLACEHOLDER_PACKAGE_TEXT,
                  backgroundImg: WoodTexture,
                },
              ],
            },
            {
              sectionContainerId: `${SERVICE_NAME_ROES_PHOTOGRAPHY}-section-container`,
              backgroundImg: WoodTexture,
              logoSrc: ROESLogo,
              name: SERVICE_NAME_ROES_PHOTOGRAPHY,
              packages: [
                {
                  title: "Paquete 1",
                  body: PLACEHOLDER_PACKAGE_TEXT,
                },
                {
                  title: "Paquete 2",
                  body: PLACEHOLDER_PACKAGE_TEXT,
                },
              ],
            },
            {
              sectionContainerId: `${SERVICE_NAME_AYMARIA_MAKEUP}-section-container`,
              logoSrc: AyMariaLogo,
              name: SERVICE_NAME_AYMARIA_MAKEUP,
              packages: [
                {
                  title: "Paquete 1",
                  body: PLACEHOLDER_PACKAGE_TEXT,
                },
                {
                  title: "Paquete 2",
                  body: PLACEHOLDER_PACKAGE_TEXT,
                },
              ],
            },
          ]}
        />
      </SectionContainer>
    </div>
  );
}

export default App;
