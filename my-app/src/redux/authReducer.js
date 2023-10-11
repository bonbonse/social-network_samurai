import {authAPI} from "../api/requestApi";

let AUTH_USER = 'AUTH_USER'

let initState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            let stateCopy = {
                ...state,
                ...action.userAuthInfo,
                isAuth: true
            };
            return stateCopy;
        }
        default:
            return state
    }
}

export let authUser = (userAuthInfo) => {
    return {type: AUTH_USER, userAuthInfo}
}
export const auth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                    if (response.data.resultCode === 0)
                        dispatch(authUser(response.data.data))
                }
            )
    }
}

export default authReducer;