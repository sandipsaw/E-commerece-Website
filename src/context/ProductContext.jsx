import React, {  createContext, useEffect, useState } from 'react'

export const productcontext =  createContext()

const ProductContext = (props) => {
    const [data,setdata] = useState([])

    useEffect(() => {
      setdata(JSON.parse(localStorage.getItem("product")) || []) 
    }, [])
    console.log(data);
    

  return (
        <productcontext.Provider value={[data,setdata]}>
            {props.children}
        </productcontext.Provider>
  )
}

export default ProductContext