import Profile from "./Profile";
import React from "react"
import axios from "axios";
import {connect} from "react-redux";

import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "../../withRouter/withRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then((response) => {
        //             this.props.setUserProfile(response.data);
        //         }
        //     )
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        age: 14,
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(ProfileContainerWithRouter);