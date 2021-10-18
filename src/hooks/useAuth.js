import { useContext } from "react"
import { AuthContext } from "../AuthoProvider/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;