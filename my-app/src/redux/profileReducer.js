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
        let stateCopy = {...state};
        let newPost = {
            name: "NICKNAME", postMessage: stateCopy.newPostText, like: 0
        }
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    } else if (active.type === NEW_POST_TEXT) {
        let stateCopy = {...state};
        stateCopy.newPostText = active.newText;
        return stateCopy;
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