import React from "react";
import NavBar from "./components/NavBar";
import SectionContainer from "./components/SectionContainer";
import Logo from "./components/Logo";
import ServicesNavbar from "./components/ServicesNavbar";
import ServiceContainer from "./components/ServiceContainer";

// file imports
import EstudiosRWLogo from "./images/ROSEWOODROSA.png";
import BlackwoodsRecordsLogo from "./images/LOGOBLACKWOOD1.png";
import ROESLogo from "./images/ROESFOTO.png";
import AyMariaLogo from "./images/AyMariaLogo4.png";

//constants
const SERVICE_NAME_ROES_PHOTOGRAPHY = "roes";
const SERVICE_NAME_BLACKWOODS_RECORDS = "blackwoods";
const SERVICE_NAME_AYMARIA_MAKEUP = "aymaria";

//midColSize = size of the middle column, according to Bootstrap's col sizes
function App() {
  return (
    <div id="container">
      {/* <NavBar /> */}
      <SectionContainer id="logo-container" midColSize={8}>
        <Logo src={EstudiosRWLogo} />
      </SectionContainer>
      {/* Services container */}
      <SectionContainer id="services-container" midColSize={12}>
        {" "}
        {/* parent container to pass info from navbar to service containers */}
        <SectionContainer id="services-navbar-container" midColSize={8}>
          <ServicesNavbar
            options={[
              "Blackwood's Records",
              "Photography by ROES",
              "Makeup by #AYMARIA",
            ]}
          />
        </SectionContainer>
        <SectionContainer
          id={`${SERVICE_NAME_BLACKWOODS_RECORDS}-section-container`}
          midColSize={12}
        >
          {" "}
          {/*So we can paint the entire section the same color */}
          <SectionContainer midColSize={8}>
            <ServiceContainer
              logoSrc={BlackwoodsRecordsLogo}
              serviceName={SERVICE_NAME_BLACKWOODS_RECORDS}
              servicePackages={[
                {
                  title: "Paquete 1",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
                     condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
                     eget elementum mauris mi vel est. Integer ultricies elementum metus,\
                     ac consectetur ligula aliquet ut. Aliquam lobortis urna ante, sed\
                     pretium odio faucibus eu. Nam interdum tempor placerat. Cras bibendum,\
                     urna in convallis tristique, erat lectus finibus metus.",
                },
                {
                  title: "Paquete 2",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
                  condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
                  eget elementum mauris mi vel est. Integer ultricies elementum metus,\
                  ac consectetur ligula aliquet ut. Aliquam lobortis urna ante, sed\
                  pretium odio faucibus eu. Nam interdum tempor placerat. Cras bibendum,\
                  urna in convallis tristique, erat lectus finibus metus.",
                },
              ]}
            />
          </SectionContainer>
        </SectionContainer>
        <SectionContainer
          id={`${SERVICE_NAME_ROES_PHOTOGRAPHY}-section-container`}
          midColSize={12}
        >
          <SectionContainer midColSize={8}>
            <ServiceContainer
              logoSrc={ROESLogo}
              serviceName={`${SERVICE_NAME_ROES_PHOTOGRAPHY}`}
              servicePackages={[
                {
                  title: "Paquete 1",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
                  condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
                  eget elementum mauris mi vel est. Integer ultricies elementum metus,\
                  ac consectetur ligula aliquet ut. Aliquam lobortis urna ante, sed\
                  pretium odio faucibus eu. Nam interdum tempor placerat. Cras bibendum,\
                  urna in convallis tristique, erat lectus finibus metus.",
                },
                {
                  title: "Paquete 2",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
                  condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
                  eget elementum mauris mi vel est. Integer ultricies elementum metus,\
                  ac consectetur ligula aliquet ut. Aliquam lobortis urna ante, sed\
                  pretium odio faucibus eu. Nam interdum tempor placerat. Cras bibendum,\
                  urna in convallis tristique, erat lectus finibus metus.",
                },
              ]}
            />
          </SectionContainer>
        </SectionContainer>
        <SectionContainer
          id={`${SERVICE_NAME_AYMARIA_MAKEUP}-section-container`}
          midColSize={12}
        >
          <SectionContainer midColSize={8}>
            <ServiceContainer
              logoSrc={AyMariaLogo}
              serviceName={`${SERVICE_NAME_AYMARIA_MAKEUP}`}
              servicePackages={[
                {
                  title: "Paquete 1",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
                  condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
                  eget elementum mauris mi vel est. Integer ultricies elementum metus,\
                  ac consectetur ligula aliquet ut. Aliquam lobortis urna ante, sed\
                  pretium odio faucibus eu. Nam interdum tempor placerat. Cras bibendum,\
                  urna in convallis tristique, erat lectus finibus metus.",
                },
                {
                  title: "Paquete 2",
                  body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\
                  condimentum, dolor eu mollis semper, eros ligula laoreet eros, \
                  eget elementum mauris mi vel est. Integer ultricies elementum metus,\
                  ac consectetur ligula aliquet ut. Aliquam lobortis urna ante, sed\
                  pretium odio faucibus eu. Nam interdum tempor placerat. Cras bibendum,\
                  urna in convallis tristique, erat lectus finibus metus.",
                },
              ]}
            />
          </SectionContainer>
        </SectionContainer>
      </SectionContainer>
    </div>
  );
}

export default App;
