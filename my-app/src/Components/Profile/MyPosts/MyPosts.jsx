import s from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import React from 'react'

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post name={p.name} postMessage={p.postMessage} like={p.like}/>)

    let addPost = () => {
        props.addPost();
    }
    let onChangeNewPost = (e) => {
        let body = e.target.value;
        props.updateNewPostText(body);
    }

    return (
        <div>
            <div>
                <textarea onChange={onChangeNewPost} value={props.newPostText} />
                <button onClick={addPost}>New Post</button>
            </div>
            {posts}
        </div>
    );
}

export default MyPosts;