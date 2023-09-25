import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Preloader from "./Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching();
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toogleIsFetching();
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(() => {
                    console.log("herny")
                }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching();
        this.props.setCurrentPage(pageNumber);
        console.log(this.props.currentPage)
        console.log("PN = " + pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toogleIsFetching();
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        console.log(this.props.isFetching)

        let users = <Users
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pagesSize={this.props.pagesSize}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
        let content = this.props.isFetching ? <Preloader/> : users;
        return (<>
                {content}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching
    })
(UsersContainer);