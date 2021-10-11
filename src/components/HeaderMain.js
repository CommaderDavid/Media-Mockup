import React from "react";

function HeaderMain() {
    return (
        <React.Fragment>
            <div class="center">
                <form>
                    <label>
                        <img />
                        <input type="text" name="inputPost" placeholder="What's happening?" />
                    </label>
                </form>
            </div>
        </React.Fragment>
    );
}

export default HeaderMain;