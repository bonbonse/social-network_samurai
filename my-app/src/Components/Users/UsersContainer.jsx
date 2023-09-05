import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId))
    }
}



let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;