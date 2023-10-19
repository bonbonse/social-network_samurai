import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import React from 'react'
import {Navigate} from "react-router-dom";
import authNavigate from "../../hoc/authNavigate";

const Dialogs = (props) => {
    let dialogs = props.dialogsData.map((d) => <DialogsItem name={d.name} id={d.id}/>)
    let messages = props.messagesData.map((m) => <Messages name={m.name} message={m.message} id={m.id}/>)

    let sendMessage = () => {
        props.sendMessage();
    }
    let newMessage = (event) => {
        let body = event.target.value;
        props.newMessageBody(body);
    }
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea
                    onChange={newMessage}
                    value={props.newMessageText}
                    placeholder="Enter message" />
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;