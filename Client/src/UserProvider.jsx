import React from 'react'
export const userContext = React.createContext({ user : 'user' })

export const UserProvider = ({ children }) => {

    const data ={
        user: JSON.parse(localStorage.getItem('user')),
    }
  return (
    <userContext.Provider value={data}>
        {children}
    </userContext.Provider>
  )
}
