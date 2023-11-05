import Menu from '@/Components/Menu'
import React from 'react'

const page = () => {
  return (
    <div>
        <Menu />
        <h1 className='text-color'>This is our About Page</h1>
        <img src='laptop.jpg' />
    </div>
  )
}

export default page