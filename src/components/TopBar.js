import React from "react";

function TopBar() {
    return (
        <React.Fragment>
            <div class="topLeft">
                <button>Home</button>
                <button>Notifications</button>
                <button>Messages</button>
            </div>
            <div class="topRight">
                <form>
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">Tweet</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default TopBar;