import { AUTH, USERS } from "../Common/reducerTypes";

export const authReducer = (state, { type, payload }) => {
    switch (type) {
        case AUTH.LOGIN:
            return {
                ...state,
                user: {
                    user_details: payload.foundUser,
                    encoded_token: payload.encodedToken
                },
                logged: true
            }
        case AUTH.LOGOUT:
            return {
                ...state,
                user: {
                    user_details: {},
                    encoded_token: ""
                },
                logged: false
            }
        case AUTH.SET_BOOKMARKS:
            return {
                ...state,
                user: {
                    ...state.user,
                    user_details: { ...state.user.user_details, bookmarks: payload },
                },
            }
        case USERS.FOLLOW:
            return {
                ...state,
                user: {
                    ...state.user,
                    user_details: payload,
                },
            }
        case AUTH.UPDATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    user_details: payload
                }
            }
        default:
            return state
    }
}