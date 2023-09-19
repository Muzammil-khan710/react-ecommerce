import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth-context";

export const Privateroute = () => {
    const { token } = useAuth()
    const location = useLocation()

    return token ? (
        <Outlet/>
    ) : (
        <Navigate to="/login" state={{from : location}} replace />
    )
}