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
      mediaList.push(
        <a key={this.props.mediaList.indexOf(media)} href={media.url} target="_blank">
          <img src={media.imgSrc}></img>
        </a>
      );
    }
    return mediaList;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12} lg={6}>
            <div className="correo">
              <h4>Escríbenos a:</h4>
              <br></br>
              <h4>correo@correo.com</h4>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="redes">
              <h4>Síguenos en redes:</h4>
              <div className="redes-iconos">
                  {this.renderMedia()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RedesContainer;
