import {UPDATE_NEW_MESSAGE_BODY_AC, sendMessageAC} from "../../redux/dialogsReducer";
import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData : state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    let dispatchProps = {
        newMessageBody: (body) => dispatch(UPDATE_NEW_MESSAGE_BODY_AC(body)),
        sendMessage: () => dispatch(sendMessageAC())
    }
    return dispatchProps;
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;