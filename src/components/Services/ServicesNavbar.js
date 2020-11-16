import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class ServicesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      activeItem: 0, //index of the active option
    };
  }

  handleClick = (index) => {
    this.setState({ activeItem: index });
  };

  renderOptions() {
    let listItems = [];
    for (const opt of this.props.options) {
      listItems.push(
        // <Nav.Link
        //   key={opt}
        //   className={"element" + this.props.options.indexOf(opt)}
        //   style={{ width: `${100 / this.props.options.length}%` }}
        // >
        <ServiceOption
          key={opt}
          className={"element" + this.props.options.indexOf(opt)}
          style={{ width: `${100 / this.props.options.length}%` }}
          // isActive={this.state.activeItem === this.props.options.indexOf(opt)}
          isActive={this.props.activeItem === this.props.options.indexOf(opt)}
          index={this.props.options.indexOf(opt)}
          // onClick={this.handleClick}
          onClick={this.props.onClick}
        >
          {opt}
        </ServiceOption>
        // </Nav.Link>
      );
    }
    return listItems;
  }

  render() {
    return (
      <Navbar
        expand="lg"
        className="services-navbar-container d-xs-none d-sm-none d-md-none d-lg-block"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>{this.renderOptions()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class ServiceOption extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <button
        href="#"
        className={`${this.props.isActive ? "active" : ""} ${
          this.props.className
        }`}
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default ServicesNavbar;