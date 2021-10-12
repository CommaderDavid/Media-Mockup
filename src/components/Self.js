import React from "react";
import idStand from "./../img/idStandIn.png";

function Self() {
    return (
        <React.Fragment>
            <img src={idStand} alt="An stand in image" />
            <h3>Demar Kanar</h3>
            <p><a>TWEETS</a> <a>FOLLOWING</a> <a>FOLLOWERS</a></p>
        </React.Fragment>
    );
}

export default Self;