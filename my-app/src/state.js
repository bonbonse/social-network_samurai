import profileReducer from "./redux/profileReducer";
import dialogsReducer from "./redux/dialogsReducer";

let ADD_POST = 'ADD-POST';
let SEND_MESSAGE = 'SEND-MESSAGE';
let NEW_POST_TEXT = 'NEW-POST-TEXT';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export let store = {
    state: {
        profilePage: {
            newPostText: "",
            posts: [{name: "NICKNAME", postMessage: "text Post", like: 1},
                {name: "NICKNAME", postMessage: "Hello", like: 1},
                {name: "Anonim", postMessage: "TEtefe", like: 3},]
        },
        dialogsPage: {
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
    },

    renderEntireTree(state) {
        console.log("State changed");
    },
    subscriber(observer) {
        this.renderEntireTree = observer;
    },
    dispatch(active) {
        this.state.profilePage = profileReducer(this.state.profilePage, active);
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, active);
        this.renderEntireTree(this.state);
    }
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let sendMessageAC = () => {
    return {type: SEND_MESSAGE}
}
export let newPostTextActionCreator = (text) => {
    return {type: NEW_POST_TEXT, newText: text}
}
export let UPDATE_NEW_MESSAGE_BODY_AC = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}
