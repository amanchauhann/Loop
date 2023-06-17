import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthProvider"

const Private = ({ children }) => {
    const { userData: { logged } } = useAuth()
    const location = useLocation()
    return logged ? children : <Navigate to="/login" state={{ from: location }} />
}

export default Private