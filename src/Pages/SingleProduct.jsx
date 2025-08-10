import React, { useContext } from 'react'
import { productcontext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SingleProduct = () => {
    const params = useParams()
    // console.log(params);

    const [data, setdata] = useContext(productcontext)
    // console.log(data);
    const product = data.find((product) => product.id == params.id)
    // console.log(product);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            image: product?.image,
            name: product?.name,
            price: product?.price,
            category: product?.category,
            description: product?.description
        }
    })
    const UpdateHandler = (product) => {
        const index = data.findIndex((product)=>product.id == params.id)
        const copydata = [...data]
        copydata[index] = {...copydata[index], ...product}
        setdata(copydata)
        localStorage.setItem("products", JSON.stringify(copydata))
        
    }
    const deleteHandler =() =>{
        const filterdata = data.filter((product)=>product.id != params.id)
        setdata(filterdata)
        localStorage.setItem("products", JSON.stringify(filterdata))
    }
    
    return product ?
        (<div className='flex justify-around items-center p-6'>


            <div>
                <img
                src={product.image}
                alt={product.name}
                className="w-100 border h-76 object-right-bottom"/>
                <h1 className='text-2xl text-[#FF7A30] uppercase'>{product.name}</h1>
                <h2 className='text-2xl text-[#FF7A30] uppercase'> <span className='text-amber-50'>Cotegory:</span> {product.category}</h2>

                <h2 className=' text-[#FF7A30] '> <span className='text-amber-50'>Description:</span> {product.description}</h2>

                <h1 className='text-4xl text-[#8AA624]'><span>₹</span>{product.price}</h1>
            </div>





            <form onSubmit={handleSubmit(UpdateHandler)} className='flex flex-col w-[500px] h-[600px] border-2 p-6 rounded-lg  '>
                <input
                    {...register('image')}
                    className='outline-none my-5 border-b-1'
                    type='url'
                    placeholder='Enter the url of Image' />

                <input
                    {...register('name')}
                    className='outline-none my-5 border-b-1' type='text' placeholder='Product Name' />

                <input
                    {...register('price')}
                    className='outline-none no-spinner my-5 border-b-1' type='number' placeholder='Enter price' />

                <select
                    {...register('category')}
                    className='w-50 outline-0 my-5 border-b-1 ' defaultValue=''>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='cloths'>Cloths</option>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='electronic'>Electronic</option>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='accessories'>Accessories</option>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='makeup'>Makups</option>
                </select>

                <textarea
                    {...register("description")}
                    className='outline-none my-5 border-b-1 h-[120px]' placeholder='Description'></textarea>

                <div className='text-center flex justify-around'>
                    <button className='bg-[#437057]  rounded mt-2 px-4 py-1 text-[#E3DE61]' type='submit'>update Product</button>
                    <button onClick={deleteHandler} className='bg-[#437057]  rounded mt-2 px-4 py-1 text-[#E3DE61]' type='submit'>delete Product</button>
                </div>
            </form>
        </div>) : "loading...";
}

export default SingleProduct