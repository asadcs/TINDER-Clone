import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Waseem",
      image:
        "https://image.crictracker.com/wp-content/uploads/2020/03/Waqar-Younis-1.jpg",
      message: "Whats Up",
    },
    {
      name: "Waseem",
      image:
        "https://image.crictracker.com/wp-content/uploads/2020/03/Waqar-Younis-1.jpg",
      message: "Whats Up2",
    },
    {
      message: "ddddd",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div>
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH WASEEM ON 10/08/2021
      </p>
      {messages.map((message) =>
        message.image ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__owntext">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__form">
        <input
          className="chatScreen__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
