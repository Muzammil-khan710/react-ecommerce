import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

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

        try {
            const { data } = await axios.post('/api/auth/login', {
            email, 
            password
            })
            setUser(data.foundUser);
            setToken(data.encodedToken)
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            localStorage.setItem("user", JSON.stringify(data.foundUser))
            toast.success('Login successful')
        } catch(err) {
            console.log(err)
            toast.error('Error occured while logging in')
        } 
    }

    const signUpFunc = async (e, newUser) => {
        e.preventDefault()

        try {
            const { data } = await axios.post('/api/auth/signup', newUser )
            setUser(data.createdUser)
            setToken(data.encodedToken) 
            localStorage.setItem("token", JSON.stringify(data.encodedToken))
            localStorage.setItem("user", JSON.stringify(data.createdUser))
            toast.success('account created successfully')
        } catch (err) {
            console.log(err)
            toast.error('Error occured while creating account')
        }
    }

    const logoutFunc = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success('Logout successful')
    }

    return(
        <AuthContext.Provider value={{loginFunc, signUpFunc, logoutFunc, token, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }