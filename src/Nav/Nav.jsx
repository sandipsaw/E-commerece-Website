import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-8 '>
        <NavLink to={'/'} className={(e)=>e.isActive && "text-[#E3DE61]"}>Home</NavLink>
        <NavLink to={'/create'} className={(e)=>e.isActive && "text-[#E3DE61]"}>Create</NavLink>
        <NavLink to={'/products'} className={(e)=>e.isActive && "text-[#E3DE61]"}>Products</NavLink>
        <NavLink to={'/about'} className={(e)=>e.isActive && "text-[#E3DE61]"}>About</NavLink>
    </div>
  )
}

export default Nav