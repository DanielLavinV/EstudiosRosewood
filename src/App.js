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
// import EstudiosRWLogo from "./images/ROSEWOODREDONDO.png";
import EstudiosRWLogo from "./images/rosewoodlogofinal.png";
import BlackwoodsRecordsLogo from "./images/LOGOBLACKWOOD1.png";
import ROESLogo from "./images/ROESFOTO.png";
import AyMariaLogo from "./images/AyMariaLogo4.png";
import Dorado from "./images/Dorado.jpg";
import WoodTexture from "./images/textura_sample.jpg";
import RosewoodFondoNegro from "./images/ROSEWOODROSAFONDONEGRO.png";
// import NuevoLogoFotografia from "./images/1Afoto.png";
import NuevoLogoFotografia from "./images/fotologofinal.png";
import NuevoLogoRecords from "./images/1ARECORDS.png";

//media icons
import FacebookIcon from "./images/facebook-bw.svg";
import WhatsappIcon from "./images/whatsapp-bw.svg";
import InstagramIcon from "./images/instagram-bw.svg";

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
                  title: "Paquete Lockout",
                  body:
                  <>
                  <p className={'extra-text'}>Incluye:</p>
                  <ul>
                    <li>Lockout de 4 horas</li>
                    <li>Cabina individual</li>
                    <li>Micrófonos</li>
                  </ul>
                  </>,
                  price: "$1,000 MXN",
                  backgroundImg: WoodTexture,
                },
                {
                  title: "Paquete Post",
                  price: "$2,000 MXN",
                  body:
                  <>
                  <p className={'extra-text'}>Incluye:</p>
                  <ul>
                    <li>Mezcla y masterización</li>
                  </ul>
                  </>,
                  backgroundImg: WoodTexture,
                },
                {
                  title: "Paquete Acústico",
                  price: "$3,000 MXN",
                  body:
                  <>
                  <p className={'extra-text'}>Incluye:</p>
                  <ul>
                    <li>Grabación de 1 tema con 3 instrumentos</li>
                    <li>Lockout de 8 horas</li>
                    <li>Mezcla y masterización</li>
                    <li className={"not-included"}>No incluye arreglos</li>
                  </ul>
                  </>,
                  backgroundImg: WoodTexture,
                },
                {
                  title: "Paquete Personalizado",
                  price: "Contáctanos :)",
                  body:"",
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
                  title: "Paquete Book",
                  price: "$3,000 MXN",
                  body:
                  <>
                  <p className={'extra-text'}>Incluye:</p>
                  <ul>
                    <li>Sesión de 4 horas en estudio</li>
                    <li>Maquillaje natural</li>
                    <li>Peinado sencillo</li>
                    <li>Retoques</li>
                    <li>4 cambios de ropa</li>
                    <li>30 fotos editadas</li>
                    <li>Posibilidad de sesión en pareja</li>
                  </ul>
                  </>,
                },
                {
                  title: "Paquete Exterior",
                  price: "$4,000 MXN",
                  body:
                  <>
                  <p className={'extra-text'}>Incluye:</p>
                  <ul>
                    <li>Sesión de 5 horas en exterior</li>
                    <li>Maquillaje natural</li>
                    <li>Peinado sencillo</li>
                    <li>Retoques</li>
                    <li>4 cambios de ropa</li>
                    <li>30 fotos editadas</li>
                    <li>Posibilidad de sesión en pareja</li>
                  </ul>
                  </>,
                },
                {
                  title: "Cotización personalizada",
                  price: "Contáctanos :)",
                  body:
                  <>
                  <p className={'extra-text'}>Eventos como:</p>
                  <ul>
                    <li>Bodas</li>
                    <li>XV's</li>
                    <li>Conferencias</li>
                    <li>Videoclips</li>
                    <li>Livesession</li>
                    <li>Etc.</li>
                  </ul>
                  </>,
                },
              ],
            },
            {
              sectionContainerId: `${SERVICE_NAME_AYMARIA_MAKEUP}-section-container`,
              logoSrc: AyMariaLogo,
              name: SERVICE_NAME_AYMARIA_MAKEUP,
              packages: [
                {
                  title: "Paquete Novia",
                  price: "$6,500 MXN",
                  body: 
                  <>
                    {/* <p className={'extra-text'}>Cita 1: Prueba para novia</p>
                      <ul>
                        <li>Maquillaje para novia con aerógrafo</li>
                        <li>Alto peinado (1-2 pruebas)</li>
                        <li>Se realiza de 5 a 20 días antes de la boda</li>
                        <li>Se recomienda tener velo y tiara</li>
                      </ul>
                    <p className={'extra-text'}>Cita 2: Día de la boda</p>
                      <ul>
                        <li>Maquillaje para novia con aerógrafo</li>
                        <li>Alto peinado con aplicación de tiara y/o velo</li>
                        <li>Labial de regalo para retoques</li>
                      </ul>
                    <p className={'extra-text'}>Incluye:</p>
                      <ul>
                        <li>Mascarilla y uñas postizas</li>
                      </ul> */}
                    <p className={'extra-text'}>Incluye:</p>
                      <ul>
                        <li>Cita 1: prueba para novia</li>
                        <li>Cita 2: el día de la boda</li>
                        <li>Maquillaje con aerógrafo</li>
                        <li>Alto peinado con tiara y/o velo</li>
                        <li>Mascarilla</li>
                        <li>Diseño de cejas</li>
                        <li>Pestañas de tira</li>
                      </ul>
                  </>,
                },
                {
                  title: "Paquete Fiesta",
                  price: "$2,000 MXN",
                  body:   
                  <>
                  <p className={'extra-text'}>Incluye:</p>
                    <ul>
                      <li>Cita 1: prueba para novia</li>
                      <li>Cita 2: el día de la boda</li>
                      <li>Maquillaje con aerógrafo</li>
                      <li>Alto peinado con tiara y/o velo</li>
                      <li>Mascarilla</li>
                      <li>Diseño de cejas</li>
                      <li>Pestañas de tira</li>
                    </ul>
                  </>,
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
              url: "javascript:void(0);",
              imgSrc: WhatsappIcon,
              id: "whatsapp-icon"
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
