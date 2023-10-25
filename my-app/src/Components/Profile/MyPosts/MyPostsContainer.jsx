import React from 'react'
import {addPostActionCreator, newPostTextActionCreator} from '../../../redux/profileReducer'
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    let stateProps = {
        posts: state.profilePage.posts,
    };
    return stateProps;
}
let mapDispatchToProps = (dispatch) => {
    let dispatchProps = {
        addPost: (newPostText) => dispatch(addPostActionCreator(newPostText)),
    }
    return dispatchProps;
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;