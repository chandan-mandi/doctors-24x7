import { useContext } from "react"
import { DoctorDbContext } from "../DoctorsDbProvider/DoctorsDbProvider"

const useDb = () => {
    return useContext(DoctorDbContext)
}
export default useDb;