import s from './User.module.css'

const User = (props) => {
    let ava = props.user.ava;

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
                <div><img
                    src={ava}/>
                </div>
                {followed}
            </div>
            <div className={s.userInfo}>
                <div className={s.fullname}>{props.user.surname} {props.user.name}</div>
                <div className={s.description}>{props.user.description}</div>
                <div className={s.country}>{props.user.country}</div>
                <div className={s.city}>{props.user.city}</div>
            </div>
        </div>
    )
}

export default User;