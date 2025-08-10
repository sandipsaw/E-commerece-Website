import React from 'react'

const SigleProduct = ({product}) => {
  return (
    <div className='border w-[400px] h-[400px] p-2 '>
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-right-bottom"
      />
      <h1 className='text-2xl text-[#FF7A30] uppercase'>{product.name}</h1>
      <h2 className='text-2xl text-[#FF7A30] uppercase'> <span className='text-amber-50'>Cotegory:</span> {product.category}</h2>

      <h2 className=' text-[#FF7A30] '> <span className='text-amber-50'>Description:</span> {product.description}</h2>

      <h1 className='text-4xl text-[#8AA624]'><span>₹</span>{product.price}</h1>

      
    
    </div>
  )
}

export default SigleProduct