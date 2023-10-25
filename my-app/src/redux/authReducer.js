import {authAPI} from "../api/requestApi";
import {Navigate} from "react-router-dom";
import React from "react";

let SET_AUTH_INFO = 'SET_AUTH_INFO'

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            };
        }
        default:
            return state
    }
}

export let setAuthInfo = (id, email, login , isAuth) => {
    return {type: SET_AUTH_INFO, id, email, login, isAuth}
}

export const auth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                    if (response.data.resultCode === 0){
                        dispatch(setAuthInfo(
                            response.data.data.id, response.data.data.email,
                            response.data.data.login, true))
                        return <Navigate to={`/profile/${response.data.data.id}`} />
                    }

                }
            )
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                    if (response.data.resultCode === 0){
                        dispatch(setAuthInfo(null, null, null, false))
                        return <Navigate to="/login"/>
                    }
                    else
                        console.warn(response.data.messages);
                }
            )
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, true)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        console.log(response)
                        dispatch(auth)
                        return <Navigate to="/profile"/>
                    } else
                        console.warn("Login error response");
                }
            )
    }
}


export default authReducer;