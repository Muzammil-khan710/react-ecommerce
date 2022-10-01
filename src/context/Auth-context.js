import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    :null)
    
    const [token, setToken] = useState(localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    :null)
    
    const loginFunc = async (e, email, password) => {
        e.preventDefault()

        console.log(email)
        console.log(password)

        try {
            const { data } = await axios.post('/api/auth/login', {
            email, 
            password
            })
            setUser(data.foundUser);
            setToken(data.encodedToken)
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            localStorage.setItem("user", JSON.stringify(data.foundUser))


        } catch(err) {
            console.log(err)
        } 
    }

    const signUpFunc = async (e, newUser) => {
        e.preventDefault()

        console.log(newUser)
        try {
            const { data } = await axios.post('/api/auth/signup', newUser )
            console.log(data)
            setUser(data.createdUser)
            setToken(data.encodedToken) 
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            localStorage.setItem("user", JSON.stringify(data.createdUser))
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <AuthContext.Provider value={{loginFunc, signUpFunc, token, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }