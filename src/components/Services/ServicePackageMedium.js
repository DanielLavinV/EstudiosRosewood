import React from "react";
import Card from "react-bootstrap/Card";


class ServicePackageMedium extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Card
                style={{
                width: "30%",
                backgroundImage: this.props.backgroundImg
                    ? `url(${this.props.backgroundImg})`
                    : "None",
                }}
                className={`service-package-medium service-package-${this.props.serviceName}`}
            >
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <h5 className={"package-price"}>{this.props.price}</h5>
                <Card.Text>{this.props.body}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}