import React from "react";

export default function MideaContent(props) {
    const { title, img } = props;
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPositionY: "50%" }}>
            <h2>{title}</h2>
        </div>
    )
}