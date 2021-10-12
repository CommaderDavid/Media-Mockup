import React from "react";
import idStand from "./../img/idStandIn.png";

function HeaderMain() {
    return (
        <React.Fragment>
            <div className="center-top">
                <form>
                    <label>
                        <img src={idStand} alt="An stand in image" />
                        <input type="text" name="inputPost" placeholder="What's happening?" />
                    </label>
                </form>
            </div>
        </React.Fragment>
    );
}

export default HeaderMain;