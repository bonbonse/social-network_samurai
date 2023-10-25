import s from './Header.module.css'
import Header from "./Header";
import React from 'react'
import {auth, logout} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (<Header isAuth={this.props.isAuth}
                        login={this.props.login}
                        logout={this.props.logout}/>);
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps,
    {auth, logout})(HeaderContainer);