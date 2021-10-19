import React, { createContext } from 'react';
import useDoctorsdb from '../hooks/useDoctorsdb';
export const DoctorDbContext = createContext();
const DoctorsDbProvider = ({children}) => {
    const doctorsdb = useDoctorsdb();
    // console.log(doctorsdb);
    return (
        <DoctorDbContext.Provider value={doctorsdb}>
            {children}
        </DoctorDbContext.Provider>
    );
};

export default DoctorsDbProvider;