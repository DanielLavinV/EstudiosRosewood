import React from "react";
import NavBar from "./components/NavBar";
import SectionContainer from "./components/SectionContainer";
import Logo from "./components/Logo";
import ServicesNavbar from "./components/Services/ServicesNavbar";
import ServiceContainer from "./components/Services/ServiceContainer";
import ServicesController from "./components/Services/ServicesController";
import RedesContainer from "./components/RedesContainer";

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
import NuevoLogoFotografia from "./images/1Afoto.png";
import NuevoLogoRecords from "./images/1ARECORDS.png";

//media icons
import FacebookIcon from "./images/facebook.svg";
import TwitterIcon from "./images/twitter.svg";
import InstagramIcon from "./images/instagram.svg";

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
            "Roes Records",
            "Photography by Rosewood",
            "Makeup by #AYMARIA",
          ]}
          services={[
            {
              sectionContainerId: `${SERVICE_NAME_BLACKWOODS_RECORDS}-section-container`,
              logoSrc: NuevoLogoRecords,
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
              logoSrc: NuevoLogoFotografia,
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
      <SectionContainer id="redes-container" midColSize={8}>
        <RedesContainer mediaList={
          [
            {
              url: "https://www.facebook.com/",
              imgSrc: FacebookIcon
            },
            {
              url: "https://www.twitter.com/",
              imgSrc: TwitterIcon
            },
            {
              url: "https://www.instagram.com/",
              imgSrc: InstagramIcon
            }
          ]
        } />
      </SectionContainer>
      <SectionContainer id="footer-container" midColSize={12}>
        <div className="footer">
          <p>Diseño web por:</p>
          <a>Daniel Lavín</a>
        </div>
      </SectionContainer>
    </div>
  );
}

export default App;
