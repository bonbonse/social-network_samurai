import {usersAPI} from "../api/requestApi";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USER"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS"

let initState = {
    users: [],
    pagesSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

let usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u;
                })
            };
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u;
                })
            };
            return stateCopy;
        }
        case SET_USERS: {
            let stateCopy = {
                ...state
            };
            console.log("yayayryey")
            stateCopy.users = [...action.users]
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            let stateCopy = {
                ...state
            };
            stateCopy.currentPage = action.currentPage;
            return stateCopy;
        }
        case SET_TOTAL_USERS_COUNT: {
            let stateCopy = {
                ...state
            };
            stateCopy.totalUsersCount = action.totalCount;
            if (stateCopy.totalUsersCount > 25)
                stateCopy.totalUsersCount = 25;
            return stateCopy;
        }
        case TOOGLE_IS_FETCHING: {
            let stateCopy = {
                ...state
            };
            stateCopy.isFetching = !stateCopy.isFetching;
            return stateCopy;
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            let stateCopy = {
                ...state,
                followingIsProgress: action.isDisabled ?
                    [...state.followingIsProgress, action.userId] :
                    state.followingIsProgress.filter(id => id !== action.userId)
            };
            return stateCopy;
        }

        default:
            return state
    }
}

export let follow = (userId) => {
    return {type: FOLLOW, userId: userId}
}
export let unfollow = (userId) => {
    return {type: UNFOLLOW, userId: userId}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users: users}
}
export let setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
}
export let toogleIsFetching = () => {
    return {type: TOOGLE_IS_FETCHING}
}
export let toogleIsFollowingProgress = (userId, isDisabled) => {
    return {type: TOOGLE_IS_FOLLOWING_PROGRESS, userId, isDisabled}
}
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching());
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toogleIsFetching());
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFollowingProgress(userId, true))
        usersAPI.postUser(userId)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(follow(userId));
                dispatch(toogleIsFollowingProgress(userId, false))
            })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFollowingProgress(userId, true))
        usersAPI.deleteUser(userId)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(unfollow(userId))
                dispatch(toogleIsFollowingProgress(userId, false))
            })
    }
}


export default usersReducer;