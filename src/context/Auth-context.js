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
    
    
    console.log(user)
    console.log(token)

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

    const signUpFunc = async () => {
        const { data } = await axios.post('/api/auth/signup')
    }

    return(
        <AuthContext.Provider value={{loginFunc, token, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }