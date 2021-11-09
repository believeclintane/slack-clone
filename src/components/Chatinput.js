/** @format */

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useStateValue } from "./StateProvider";
const Chatinput = ({ channelName, channelId }) => {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userimg: user?.photoURL,
      });

      setInput("");
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`message ${channelName}`}
        />

        <button onClick={sendMessage}> Send</button>
      </form>
    </div>
  );
};

export default Chatinput;
