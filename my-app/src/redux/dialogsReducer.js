let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initState = {
    newMessageText: "",
    dialogsData: [
        {"name": "Lena", "id": 1},
        {"name": "Anna", "id": 2},
        {"name": "Sema", "id": 3},
        {"name": "Andrew", "id": 4}
    ],
    messageData: [
        {"name": "Lena", "message": "ewe", "id": 1},
        {"name": "Anna", "message": "tetere", "id": 2},
        {"name": "Sema", "message": "yeyyer", "id": 3},
        {"name": "Andrew", "message": "hello", "id": 4}
    ]
}

let dialogsReducer = (state = initState, active) => {
    if (active.type === UPDATE_NEW_MESSAGE_BODY) {
        let stateCopy = {...state};
        stateCopy.newMessageText = active.body;
        return stateCopy;
    } else if (active.type === SEND_MESSAGE){
        let stateCopy = {...state};
        stateCopy.messageData = {...state.messageData};
        let newMessage = {
            name: "NICKNAME", message: stateCopy.newMessageText, id: 115
        }
        console.log(stateCopy.messageData);
        console.log(state.messageData);
        stateCopy.messageData.push(newMessage);
        stateCopy.newMessageText = '';
        return stateCopy;
    }
    return state;
}

export let sendMessageAC = () => {
    return {type: SEND_MESSAGE}
}
export let UPDATE_NEW_MESSAGE_BODY_AC = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}


export default dialogsReducer;