import { useEffect, useState } from "react"

const useDoctorsdb = () => {
    const [doctorsdb, setDoctors] = useState([]);
    useEffect(() => {
        // setIsLoading(true)
        fetch('./doctorsdb.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
            // setIsLoading(false)
    }, [])

    return doctorsdb;
}

export default useDoctorsdb;

