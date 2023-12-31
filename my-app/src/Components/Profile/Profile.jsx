import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className='content'>
            <div className={s.imageBlock}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            </div>
            <MyPostsContainer  />
        </div>
    );
}

export default Profile;