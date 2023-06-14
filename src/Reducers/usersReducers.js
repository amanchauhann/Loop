import { USERS } from "../Common/reducerTypes";

export const usersReducers = (state, { type, payload }) => {
    switch (type) {
        case (USERS.INITIALISE):
            return {
                ...state,
                users: payload
            }
    }
}