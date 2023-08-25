import React from 'react'
import {addPostActionCreator, newPostTextActionCreator} from '../../../redux/profileReducer'
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    let stateProps = {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
    return stateProps;
}
let mapDispatchToProps = (dispatch) => {
    let dispatchProps = {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (body) => dispatch(newPostTextActionCreator(body))
    }
    return dispatchProps;
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;