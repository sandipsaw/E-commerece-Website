import { Link, useParams } from "react-router-dom"


const ProductCard = (props) => {
  const {id,image,name, category, description, price} = props.product;
  
  return (
    <Link to={`/product/detail/${id}`} className='border w-[400px] h-[400px] p-2 '>
        <img
        src={image}
        alt={name}
        className="w-full h-56 object-right-bottom"
      />
      <h1 className='text-2xl text-[#FF7A30] uppercase'>{name}</h1>
      <h2 className='text-2xl text-[#FF7A30] uppercase'> <span className='text-amber-50'>Cotegory:</span> {category}</h2>

      <h2 className=' text-[#FF7A30] '> <span className='text-amber-50'>Description:</span> {description}</h2>

      <h1 className='text-4xl text-[#8AA624]'><span>₹</span>{price}</h1>

      
    
    </Link>
  )
}

export default ProductCard