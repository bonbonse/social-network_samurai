import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    toogleIsFollowingProgress, getUsers,
    followThunk, unfollowThunk
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "./Preloader/Preloader";
import authNavigate from "../../hoc/authNavigate";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        let users = <Users
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pagesSize={this.props.pageSize}
            users={this.props.users}
            followingIsProgress={this.props.followingIsProgress}
            toogleIsFollowingProgress={this.props.toogleIsFollowingProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
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
        pageSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress,
    }
}
export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage,
            toogleIsFollowingProgress, getUsers, followThunk, unfollowThunk
        }),
    authNavigate
)(UsersContainer)

