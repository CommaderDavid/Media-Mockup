import React from "react";
import Self from "./Self";
import SelfPost from "./SelfPost";

function UserPost() {
    return (
        <React.Fragment>
            <div className="Left">
                <Self />
                <SelfPost />
            </div>
        </React.Fragment>
    );
}

export default UserPost;