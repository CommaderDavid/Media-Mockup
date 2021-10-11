import React from "react";
import FriendList from "./FriendList";
import HeaderMain from "./HeaderMain";
import PostList from "./PostList";
import Self from "./Self";
import SelfPost from "./SelfPost";
import TopBar from "./TopBar";

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <TopBar />
        <div id="feed">
          <HeaderMain />
          <PostList />
          <FriendList />
          <Self />
          <SelfPost />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
