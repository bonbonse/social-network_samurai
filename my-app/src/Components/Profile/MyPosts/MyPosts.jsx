import s from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import React from 'react'
import {NewPost} from "./NewPost/NewPost";

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post name={p.name} postMessage={p.postMessage} like={p.like}/>)

    let addPost = (newPostText) => {
        props.addPost(newPostText);
    }

    return (
        <div>
            <div>
                <NewPost addPost={addPost}/>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;