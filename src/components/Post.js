import React from "react";
import PropTypes from "prop-types";

function Post(props) {
    return (
        <React.Fragment>
            <div className="center">
                <h3>{props.names}</h3>
                <p>{props.subject}</p>
            </div>
        </React.Fragment>
    );
}

Post.propTypes = {
    names: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired
};

export default Post;