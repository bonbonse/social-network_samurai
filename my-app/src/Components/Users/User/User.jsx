import s from './User.module.css'
const defaultAva = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlCKG7p8FCEus4Ftg7q-YCBU5z1PykDrzfYvnr6YbRg&s"

const User = (props) => {

    let follow = (userId) => {
        props.follow(userId)
    };
    let unfollow = (userId) => {
        props.unfollow(userId)
    };
    let userId = props.user.id;
    let followed = props.user.followed ?
        <button onClick={() => unfollow(userId)}>unfollow</button> :
        <button onClick={() => follow(userId)}>follow</button>;

    return (
        <div className={s.user}>
            <div className={s.ava}>
                <img src={defaultAva} />
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