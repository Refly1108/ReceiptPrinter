import React from 'react';

function ChatGPT(props) {
    return (
        <button className="ChatGPTbtn" onClick={props.onClick}>
            <u>{props.label}</u>
        </button>
    );
}

export default ChatGPT
