import React from "react";

function Logo(props){
    return(
        <div>
            <img src={props.src}></img>
        </div>
    );
}

export default Logo;