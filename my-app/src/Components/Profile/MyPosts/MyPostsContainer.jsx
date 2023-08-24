import s from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import React from 'react'
import {addPostActionCreator, newPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let posts = state.profilePage.posts;
    let newPostText = state.profilePage.newPostText;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let updateNewPostText = (body) => {
        props.store.dispatch(newPostTextActionCreator(body));
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            newPostText={newPostText}
            posts={posts} />
    );
}

export default MyPostsContainer;