import { USERS } from "../Common/reducerTypes";

export const usersReducers = (state, { type, payload }) => {
    switch (type) {
        case (USERS.INITIALISE):
            return {
                ...state,
                users: payload
            }
        case (USERS.FOLLOW):
            return {
                ...state,
                users: state.users.map(each_user => each_user._id === payload._id ? payload : each_user)
            }

    }
}