let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';

let initState = {
    newPostText: "",
    posts: [{name: "NICKNAME", postMessage: "text Post", like: 1},
        {name: "NICKNAME", postMessage: "Hello", like: 1},
        {name: "Anonim", postMessage: "TEtefe", like: 3},]
};

let profileReducer = (state = initState, active) => {
    if (active.type === ADD_POST) {
        let newPost = {
            name: "NICKNAME", postMessage: state.newPostText, like: 0
        }
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (active.type === NEW_POST_TEXT) {
        state.newPostText = active.newText;
    }
    return state;
}


export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let newPostTextActionCreator = (text) => {
    return {type: NEW_POST_TEXT, newText: text}
}


export default profileReducer;