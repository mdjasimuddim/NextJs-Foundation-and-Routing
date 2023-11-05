'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Menu = () => {
  let currentPath = usePathname();
  return (
    <div>
        <ul>
            <li><Link className={currentPath === "/" ? 'active-link' : 'pending-link'} href="/">Home</Link></li>
            <li><Link className={currentPath === "/Blog" ? 'active-link' : 'pending-link'} href="/Blog">Blog</Link></li>
            <li><Link className={currentPath === "/Profile" ? 'active-link' : 'pending-link'}
             href={{pathname:"/Profile", query:{name:'URL Params are like', age:30, title:"Profile Heading"}}}
             >Profile</Link></li>
            <li><Link className={currentPath === "/Server_Client_side" ? 'active-link' : 'pending-link'} href="/Server_Client_side">Server_Client_side</Link></li>
            <li><Link className={currentPath === "/Server_site_Rendering" ? 'active-link' : 'pending-link'} href="/Server_site_Rendering">Server_site_Rendering</Link></li>
            <li><Link className={currentPath === "Client_side_Rendering/" ? 'active-link' : 'pending-link'} href="/Client_side_Rendering">Client_side_Rendering</Link></li>
        </ul>
        
        
        
        
        
    </div>
  )
}

export default Menu