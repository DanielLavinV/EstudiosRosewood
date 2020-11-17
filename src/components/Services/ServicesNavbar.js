import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavbarBrand } from "react-bootstrap";

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
        <ServiceOption
          key={opt}
          className={"element" + this.props.options.indexOf(opt)}
          style={{ width: `${100 / this.props.options.length}%` }}
          isActive={this.props.activeItem === this.props.options.indexOf(opt)}
          index={this.props.options.indexOf(opt)}
          onClick={this.props.onClick}
        >
          {opt}
        </ServiceOption>
      );
    }
    return listItems;
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="services-navbar-container"
      >
        <div className="d-sm-block d-lg-none">
        <Navbar.Brand>
          Explorar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
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
