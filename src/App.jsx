import React from 'react'
import { useState, useEffect } from "react";
import { RouterProvider } from 'react-router-dom';
import router from "./router.jsx";
import Loading from './components/Loading.jsx';
import { getCurrentUser } from './api.js';


export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let currentUser = null
    async function fetchData() {
      currentUser = await getCurrentUser()
      setUser(currentUser)
      setLoading(false)
    }
    fetchData()

    return () => { setUser(null) }
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      )}
    </>
  )
}

export default App
