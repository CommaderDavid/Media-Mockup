import React from "react";
import FriendList from "./FriendList";
import UserPost from "./UserPost";
import PostList from "./PostList";
import TopBar from "./TopBar";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TopBar />
        <div id="feed">
          <UserPost />
          <PostList />
          <FriendList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
