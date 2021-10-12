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
            <div className="Right">
                {masterFriendList.map((friend, index) =>
                    <Friend userNames={friend.userNames}
                        key={index} />
                )}
            </div>
        </React.Fragment>
    );
}

export default FriendList;