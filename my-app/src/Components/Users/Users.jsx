import s from './Users.module.css'
import User from "./User/User";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return <div>
        <div>Users</div>
        <div>
            {
                pages.map((p) => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p && s.activePage}>{p}</span>
                })
            }
        </div>
        {props.users.map((item) =>
            <div key={item.id}>
                <User user={item} follow={props.follow} unfollow={props.unfollow}/>
            </div>)
        }
        <button>button</button>
    </div>
}

export default Users;