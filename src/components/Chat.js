/** @format */

import {
  InfoOutlined,
  StarBorder,
  StarBorderOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Chatinput from "./Chatinput";
import { db } from "./firebase";
import Message from "./Message";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  // console.log(roomId);
  // console.log(roomMessages);

  //   roomMessages.map((message, index) => console.log(message.user));
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight ">
          <p>
            <InfoOutlined />
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {/* {messages} */}
        {roomMessages.map((message, index) => (
          <Message
            key={index}
            message={message.message}
            user1={message.user}
            timestamp={message.timestamp}
            userImg={message.userimg}
          />
        ))}
      </div>
      {roomDetails?.name !== undefined && (
        <>
          <Chatinput channelName={roomDetails?.name} channelId={roomId} />
        </>
      )}
    </div>
  );
};

export default Chat;
