const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USER"

const defaultAva = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlCKG7p8FCEus4Ftg7q-YCBU5z1PykDrzfYvnr6YbRg&s"

let initState = {
    users: [
        {
            id: 0,
            surname: "Bondar",
            name: "Semyon",
            description: "im semyon",
            country: "Russia",
            city: "SPb",
            followed: false,
            ava: defaultAva
        },
        {
            id: 1,
            surname: "Surname",
            name: "name1",
            description: "im good",
            country: "England",
            city: "London",
            followed: true,
            ava: defaultAva
        },
        {
            id: 2,
            surname: "Surname2",
            name: "name2",
            description: "hello",
            country: "Russia",
            city: "Moscow",
            followed: false,
            ava: defaultAva
        }
    ]
};

let usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u;
                })
            };
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {...state,
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
                ...state,
                users: [...state.users, ...action.users]
            };
            return stateCopy;
        }
        default:
            return state
    }
}

export let followAC = (userId) => {
    return {type: FOLLOW, userId: userId}
}
export let unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId: userId}
}
export let setUsersAC = (users) => {
    return {type: SET_USERS, users: users}
}

export default usersReducer;