import React from "react";
import PropTypes from "prop-types";
import idStand from "./../img/idStandIn.png";

function Friend(props) {
    return (
        <React.Fragment>
            <div className="Right">
                <img src={idStand} alt="An stand in image" />
                <h3>{props.userNames}</h3>
                <button>Button</button>
            </div>
        </React.Fragment>
    );
}

Friend.propTypes = {
    userNames: PropTypes.string.isRequired
};

export default Friend;