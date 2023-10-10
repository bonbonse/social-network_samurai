import s from './User.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/requestApi";

const defaultAva = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlCKG7p8FCEus4Ftg7q-YCBU5z1PykDrzfYvnr6YbRg&s"

const User = (props) => {
    let follow = (userId) => {
        props.followThunk(userId);
    };
    let unfollow = (userId) => {
        props.unfollowThunk(userId);

    };
    let followingIsProgressUser = () => {
        return props.followingIsProgress.some((item) =>
        {return props.user.id === item})
    }
    let userId = props.user.id;
    let followed = props.user.followed ?
        <button disabled={followingIsProgressUser()} onClick={() => unfollow(userId)}>unfollow</button> :
        <button disabled={followingIsProgressUser()} onClick={() => follow(userId)}>follow</button>;
    let ava = props.user.photos.small ? props.user.photos.small : defaultAva;
    return (
        <div className={s.user}>
            <div className={s.ava}>
                <NavLink to={"/profile/" + props.user.id}>
                    <img src={ava}/>
                </NavLink>
                {followed}
            </div>
            <div className={s.userInfo}>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </div>
        </div>
    )
}

export default User;