import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.info}>
                {props.name}
            </div>
            <div className={s.message}>
                {props.postMessage}
            </div>
            <div className={s.like}>
                {props.like}
            </div>
        </div>
    );
}

export default Post;