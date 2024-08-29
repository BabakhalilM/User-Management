
import React, { createContext, useState } from "react";
import axios from "./api";
export const Apicontext = createContext();

export const ApicontextProvider = ({ children }) => {
    const [emp, setEmp] = useState([]);
    
    const getData = async () => {
        try {
            const response = await axios.get("/users");
            setEmp(response.data.usersData);
        } catch (err) {
            console.log("Error fetching data", err);
        }
    }
    return (
        <Apicontext.Provider value={{emp, setEmp,getData}} >
            {children}
        </Apicontext.Provider>
    )
}