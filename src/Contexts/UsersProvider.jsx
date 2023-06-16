import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { usersReducers } from "../Reducers/usersReducers";
import { getUsersService } from "../Services/userServices";

const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
    const initialUsers = []
    const [allUsers, usersDispatch] = useReducer(usersReducers, initialUsers)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data, status } = await getUsersService()
                if (status === 200) {
                    usersDispatch({ type: "INITIALISE_USERS", payload: data.users })
                }
            } catch (e) {
                console.error("error from UsersProvider", e)
            }
        }
        fetchUsers()
    }, [])
    return (
        <UsersContext.Provider value={{ allUsers }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext)