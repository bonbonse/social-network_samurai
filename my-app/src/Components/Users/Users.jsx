import s from './Users.module.css'
import User from "./User/User";
import axios from "axios"
import React from 'react'


class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(() => {
                    console.log("herny")
                }
            )
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>
                <div>Users</div>
                <div>
                    {
                        pages.map((p) => {
                            return <span onClick={() => this.onPageChanged(p)}
                                         className={this.props.currentPage === p && s.activePage}>{p}</span>
                        })
                    }
                </div>
                {this.props.users.map((item) =>
                    <div key={item.id}>
                        <User user={item} follow={this.props.follow} unfollow={this.props.unfollow}/>
                    </div>)
                }
                <button>button</button>
            </div>
        )
    }


}

export default Users;