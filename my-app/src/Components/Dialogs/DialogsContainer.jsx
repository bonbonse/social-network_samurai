import {UPDATE_NEW_MESSAGE_BODY_AC, sendMessageAC} from "../../redux/dialogsReducer";
import React from 'react'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;
    let dialogsData = dialogsPage.dialogsData;
    let messagesData = dialogsPage.messageData;
    let newMessageText = dialogsPage.newMessageText;
    let sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }
    let newMessageBody = (body) => {
        props.store.dispatch(UPDATE_NEW_MESSAGE_BODY_AC(body))
    }

    return (<Dialogs
        dialogsData={dialogsData}
        messagesData={messagesData}
        newMessageBody={newMessageBody}
        sendMessage={sendMessage}
        newMessageText={newMessageText}
        />
    );

}

export default DialogsContainer;