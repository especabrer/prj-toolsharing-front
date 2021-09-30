import React, { useState } from "react";
import Signup from "./signup";
import Login from "./login";

function UserInfo(props) {
  const {username} = props.userInfo.data
  return (
    <div>
        <p>{username}</p>
    </div>
  );
}

export default UserInfo;