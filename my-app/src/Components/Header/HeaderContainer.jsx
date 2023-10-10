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
        return (<Header/>);
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,
    {auth})(HeaderContainer);