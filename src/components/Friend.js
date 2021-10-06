import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
    return (
        <React.Fragment>
            <div class="Left">
                <img />
                <h3>{props.userNames}</h3>
                <button>Button</button>
                <hr />
            </div>
        </React.Fragment>
    );
}

Friend.propTypes = {
    userNames: PropTypes.string.isRequired
};

export default Friend;