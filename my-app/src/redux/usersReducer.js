const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USER"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"

let initState = {
    users: [],
    pagesSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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


export default usersReducer;