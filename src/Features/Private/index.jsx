import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthProvider"

const Private = () => {
    const { userData: { logged } } = useAuth()
    const location = useLocation()
    return logged ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
}

export default Private