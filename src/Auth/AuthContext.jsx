import {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthentication, setIsAuthentication] = useState(false);

    const login = (username, password) => {
        if(username === 'user' && password === 'password') {
            setIsAuthentication(true)
            return true
        }
        return false;
    }
    const logout = () => {
        setIsAuthentication(false)
    }
  return (
    <AuthContext.Provider value={{login, isAuthentication, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider