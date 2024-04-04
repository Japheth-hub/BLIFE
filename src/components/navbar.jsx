import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='w-full flex justify-between items-center py-1 px-4'>
        <h1 className='text-3xl'>B LIFE</h1>
        <ul className='flex justify-center items-center'>
            <li>Productos</li>
            <li className='mx-4 rounded-3xl bg-orange-400 px-4'>Promociones</li>
            <li>Nosotros</li>
        </ul>
        <ul className='flex justify-center items-center'>
            <li><img src='/search.png' width='20px' alt="Search" /></li>
            <li className='mx-5'><img src='/user.png' width='20px' alt="User" /></li>
            <li><img src='shopping.png' width='20px' alt="Shopping" /></li>
        </ul>
    </div>
  )
}