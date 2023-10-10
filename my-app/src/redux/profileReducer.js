import {usersAPI} from "../api/requestApi";

let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';

let initState = {
    newPostText: "",
    posts: [],
    profile: null
};

let profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            let newPost = {
                name: "NICKNAME", postMessage: stateCopy.newPostText, like: 0
            }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {...state}
            stateCopy.profile = {...action.userProfile};
            return stateCopy;
        }
        default:
            return state;
    }
}


export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let newPostTextActionCreator = (text) => {
    return {type: NEW_POST_TEXT, newText: text}
}
export let setUserProfile = (userProfile) => {
    return {type: SET_USER_PROFILE, userProfile}
}
export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)))
    }
}



export default profileReducer;