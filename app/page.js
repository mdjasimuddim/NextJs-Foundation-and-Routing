'use client';
import Menu from '@/Components/Menu';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    (async()=>{
      let res = await fetch('https://jsonplaceholder.typicode.com/todos');
      let json = await res.json();
      setData(json)
    })()
  },[])
  return (
    <div>
      <h2 className='text-color'>This is our Home Page</h2>
      <Menu />
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.id}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default page