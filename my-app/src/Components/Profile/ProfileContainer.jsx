import Profile from "./Profile";
import React from "react"
import {connect} from "react-redux";

import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "../../withRouter/withRouter";
import authNavigate from "../../hoc/authNavigate";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} updateStatus={this.props.updateStatus} />;
    }
}

let mapStateToProps = (state) => {
    return {
        age: 14,
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    authNavigate
)(ProfileContainer);
