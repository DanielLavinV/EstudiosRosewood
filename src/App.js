import React from "react";
import NavBar from "./components/NavBar";
import SectionContainer from "./components/SectionContainer";
import Logo from "./components/Logo";
import ServicesNavbar from "./components/ServicesNavbar";
import ServiceContainer from "./components/ServiceContainer";

// file imports
import EstudiosRWLogo from "./images/ROSEWOODROSA.png";
import BlackwoodsRecordsLogo from "./images/LOGOBLACKWOOD1.png";

//midColSize = size of the middle column, according to Bootstrap's col sizes
function App() {
  return (
    <div id="container">
      {/* <NavBar /> */}
      <SectionContainer id="logo-container" midColSize={8}>
        <Logo src={EstudiosRWLogo} />
      </SectionContainer>
      {/* Services container */}
      <SectionContainer id="services-container" midColSize={12}> {/* parent container to pass info from navbar to service containers */}
        <SectionContainer midColSize={8}>
          <ServicesNavbar
            options={[
              "Blackwood's Records",
              "Photography by ROES",
              "Makeup by #AYMARIA",
            ]}
          />
        </SectionContainer>
        <SectionContainer id="blackwoods-section-container" midColSize={12}> {/*So we can paint the entire section the same color */}
            <SectionContainer midColSize={8}>
              <ServiceContainer logoSrc={BlackwoodsRecordsLogo}/>
            </SectionContainer>
        </SectionContainer>
        <SectionContainer id="roes-section-container" midColSize={12}>

        </SectionContainer>
        <SectionContainer id="aymaria-section-container" midColSize={12}>

        </SectionContainer>
      </SectionContainer>
    </div>
  );
}

export default App;
