import s from './Header.module.css'
import Header from "./Header";
import React from 'react'
import {auth} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (<Header isAuth={this.props.isAuth}/>);
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,
    {auth})(HeaderContainer);