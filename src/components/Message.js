/** @format */

import React from "react";

const Message = ({ message, timestamp, user1, userImg }) => {
  return (
    <div className="message">
      <img src={userImg} alt="" />
      <div className="message__info">
        <h4>
          {user1} <small>{new Date(timestamp?.toDate()).toUTCString()}</small>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
