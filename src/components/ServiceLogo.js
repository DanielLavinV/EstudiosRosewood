import React from "react";

function ServiceLogo(props) {
    return(
        <div className="service-logo">
            <img src={props.src}></img>
        </div>
    );
}

export default ServiceLogo;