import {connect} from "react-redux";
import React from "react"
import {Navigate} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let authNavigate = (Component) => {

    class NavigateComponent extends React.Component {

        render() {
            if (this.props.isAuth)
                return <Component {...this.props}/>
            else
                return <Navigate to="/login"/>
        }
    }

    let connectedComponents = connect(mapStateToProps)(NavigateComponent);
    return connectedComponents;
}

export default authNavigate;

