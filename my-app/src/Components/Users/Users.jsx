import s from './Users.module.css'
import User from "./User/User";

const Users = (props) => {
    let users = props.users.map((item) =>
        <div key={item.id}>
            <User user={item} follow={props.follow} unfollow={props.unfollow} />
        </div>);
    let follow = (userId) => {
        props.follow(userId)
    }
    return (
        <div>
            <div>Users</div>
            <div>{users}</div>
            <button onClick={(userId) => follow(userId)}>Add users</button>
        </div>
    )
}

export default Users;