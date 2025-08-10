import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { productcontext } from '../context/ProductContext'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const [data, setdata] = useContext(productcontext)
    const navigate=useNavigate()
    const submitHandler = (product) => {

        product.id = nanoid()
        const copydata = [...data];
        copydata.push(product)
        setdata(copydata)
        localStorage.setItem("products",JSON.stringify(copydata))
        navigate("/products")
        reset();
    }
    


    return (
        <div className='flex justify-center items-center p-6'>
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col w-[500px] h-[600px] border-2 p-6 rounded-lg  '>
                <input
                    {...register('image', { required: "must be filled" })}
                    className='outline-none my-5 border-b-1'
                    type='url'
                    placeholder='Enter the url of Image' />
                {errors.image && <p className='text-red-500' >{errors.image.message}</p>}
                <input
                    {...register('name', { required: "must be filled" })}
                    className='outline-none my-5 border-b-1' type='text' placeholder='Product Name' />
                {errors.name && <p className='text-red-500' >{errors.name.message}</p>}
                <input
                    {...register('price', { required: "must be filled" })}
                    className='outline-none no-spinner my-5 border-b-1' type='number' placeholder='Enter price' />
                {errors.price && <p className='text-red-500' >{errors.price.message}</p>}
                <select
                    {...register('category', { required: "must be filled" })}
                    className='w-50 outline-0 my-5 border-b-1 ' defaultValue=''>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='cloths'>Cloths</option>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='electronic'>Electronic</option>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='accessories'>Accessories</option>
                    <option className='text-[#E3DE61]  bg-[#2F5249] font-semibold' value='makeup'>Makups</option>
                </select>
                {errors.category && <p className='text-red-500' >{errors.category.message}</p>}
                <textarea
                    {...register("description", { required: "must be filled" })}
                    className='outline-none my-5 border-b-1 h-[120px]' placeholder='Description'></textarea>
                {errors.description && <p className='text-red-500' >{errors.description.message}</p>}
                <div className='text-center'>
                    <button className='bg-[#437057]  rounded mt-2 px-4 py-1 text-[#E3DE61]' type='submit'>Create Product</button>
                </div>
            </form>
        </div>
    )
}

export default Create