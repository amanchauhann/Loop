import { AUTH } from "../Common/reducerTypes";

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
        case AUTH.SET_BOOKMARKS:
            return {
                ...state,
                user: {
                    ...state.user,
                    user_details: { ...state.user.user_details, bookmarks: payload },
                },
            }
        default:
            return state
    }
}