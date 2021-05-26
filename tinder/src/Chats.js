import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Waseem Akram"
        message="Wuff"
        timestamp="6 mins ago"
        profilePic="https://image.crictracker.com/wp-content/uploads/2020/03/Waqar-Younis-1.jpg"
      />
      <Chat
        name="Waqar Younis"
        message="Bork"
        timestamp="1 hr ago"
        profilePic="https://image.crictracker.com/wp-content/uploads/2020/03/Waqar-Younis-1.jpg"
      />
      <Chat
        name="Shoaib Akhter"
        message="Awooo"
        timestamp="4 hrs ago"
        profilePic="http://pak101.com/celebrities/Cricketers/shoaib_akhtar_xmqvr.jpg"
      />
    </div>
  );
};

export default Chats;
