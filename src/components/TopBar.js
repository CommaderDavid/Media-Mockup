import React from "react";

function TopBar() {
    return (
        <React.Fragment>
            <div className="jumbotron">
                <div className="top">
                    <div id="topLeft">
                        <button>Home</button>
                        <button>Notifications</button>
                        <button>Messages</button>
                    </div>
                    <form>
                        <input type="text" name="search" placeholder="Search" />
                        <button type="submit">Tweet</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopBar;