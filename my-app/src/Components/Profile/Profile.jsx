import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {changeTextareaText} from "../../state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div className='content'>
            <div className={s.imageBlock}>
                <div className={s.row}>
                    <img src='https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' />
                    <div>Surname Name</div>
                    <div>Age</div>
                </div>

            </div>
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;