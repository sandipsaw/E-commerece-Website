import React, {  createContext, useEffect, useState } from 'react'

export const productcontext =  createContext()

const ProductContext = ({children}) => {
    const [data,setdata] = useState([])

    useEffect(() => {
      setdata(JSON.parse(localStorage.getItem("products")) || []) 
    }, [])
   
    

  return (
        <productcontext.Provider value={[data,setdata]}>
            {children}
        </productcontext.Provider>
  )
}

export default ProductContext