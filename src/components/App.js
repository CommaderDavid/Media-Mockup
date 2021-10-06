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
      <TopBar />
      <HeaderMain />
      <PostList />
      <FriendList />
      <Self />
      <SelfPost />
    </React.Fragment>
  );
}

export default App;
