import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, setCurrentPage, setTotalUsersCount} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount))
    }
}



let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;