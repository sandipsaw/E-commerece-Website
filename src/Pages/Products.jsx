import React, { useContext } from 'react'
import { productcontext } from '../context/ProductContext'
import SigleProduct from './SigleProduct'



const Products = () => {

    const {data}=useContext(productcontext)
    console.log(data);
    
    const render = data.map((product)=>{
        <SigleProduct  product={product} key={product.id} /> 
    })
    

  return (
    <div>

    {data.length>0 ? render : "Recipe not Found"}

    </div>
  )
}

export default Products