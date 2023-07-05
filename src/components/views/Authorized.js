import { Navigate, useLocation } from "react-router-dom"
import useLocalStorageState from "use-local-storage-state"

export const Authorized = ({ children }) => {
    const location = useLocation()
    const [user, setUser] = useLocalStorageState("celestial_user")

    if (user) {
        return children
    }
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}

