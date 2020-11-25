import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class RedesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderMedia() {
    let mediaList = [];
    for (const media of this.props.mediaList) {
      if (!media.id) {
        mediaList.push(
          <a
            key={this.props.mediaList.indexOf(media)}
            href={media.url}
            target="_blank"
          >
            <img className="filter-red" src={media.imgSrc}></img>
          </a>
        );
      }
    }
    return mediaList;
  }

  renderWhatsapp() {
    for(const media of this.props.mediaList) {
      if(media.id){
        return(
          <div className="whatsapp">
            <img className="filter-red" src={media.imgSrc}></img>
            <h4>+5255545000</h4>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12} lg={6}>
            <div className="correo">
              <h4>Escríbenos a:</h4>
              <h4>correo@correo.com</h4>
              {this.renderWhatsapp()}
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="redes">
              <h4>Síguenos en redes:</h4>
              <div className="redes-iconos">{this.renderMedia()}</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RedesContainer;
