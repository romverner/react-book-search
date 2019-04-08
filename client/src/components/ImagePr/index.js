import React from "react";

function ImagePr(props) {
    return(
        <div className="text-right">
            <img className="img img-fluid" src={props.image} alt="thumb"/>
        </div>
    );
};

export default ImagePr;