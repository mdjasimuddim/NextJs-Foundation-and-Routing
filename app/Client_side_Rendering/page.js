'use client';
import Menu from '@/Components/Menu';
import React, { useEffect, useState } from 'react'

const page = () => {
    let [data, setData] = useState([])
    useEffect(()=>{
        (async()=>{
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let json = await response.json();
            setData(json)
        })()
    }, [])
  return (
    <div>
        <Menu />
        <h1 className='text-color'>Client Side Rendering</h1>
        {
            data.map((item, index) =>{
                return(
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h2>{item.title}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default page