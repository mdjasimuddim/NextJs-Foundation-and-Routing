'use client'
import Menu from '@/Components/Menu'
import styles from '../page.module.css'
import { useSearchParams } from 'next/navigation'
const page = () => {
  const params = useSearchParams();
  return (
    <div>
        <Menu />
        <h4>{params.get('name')}</h4>
        <h5>{params.get('title')}</h5>
        <h1 className= {styles.myHeadingLine}>This is our Profile Page</h1>
        <h1 className={styles.myText}>This is our Profile Page that is called for myText</h1>
        <img src='next.svg' />
    </div>
  )
}

export default page