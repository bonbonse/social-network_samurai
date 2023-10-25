import {profileAPI, usersAPI} from "../api/requestApi";

let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let GET_STATUS = 'GET_STATUS';

let initState = {
    posts: [],
    profile: null,
    status: ""
};

let profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            let newPost = {
                name: "NICKNAME", postMessage: action.newPostText, like: 0
            }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {
                ...state,
                ...state.photos
            }
            stateCopy.profile = {...action.userProfile};
            return stateCopy;
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.newStatus
            }
        }
        default:
            return state;
    }
}


export let addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText}
}
export let setUserProfile = (userProfile) => {
    return {type: SET_USER_PROFILE, userProfile}
}
export let setStatus = (newStatus) => {
    return {type: GET_STATUS, newStatus}
}


export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)))
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {dispatch(setStatus(data))})
    }
}

export const updateStatus = (newStatusBody) => {
    return (dispatch) => {
        profileAPI.putStatus(newStatusBody)
            .then(response => {
                debugger
                dispatch(setStatus(newStatusBody));
                response.resultCode === 0 && console.log("Status in state!")
            })
    }
}



export default profileReducer;