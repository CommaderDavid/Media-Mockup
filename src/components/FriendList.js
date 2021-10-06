import React from "react";
import Friend from "./Friend";

const masterFriendList = [
    {
        userNames: 'Lorem ipsum'
    },
    {
        userNames: 'Lorem ipsum'
    },
    {
        userNames: 'Lorem ipsum'
    }
];

function FriendList() {
    return (
        <React.Fragment>
            <hr />
            {masterFriendList.map((friend, index) =>
                <Friend userNames={friend.userNames}
                    key={index} />
            )}
        </React.Fragment>
    );
}

export default FriendList;