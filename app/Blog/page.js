import Menu from '@/Components/Menu'
import styles from '../page.module.css'
const page = () => {
  return (
    <div>
        <Menu />
        <h1 className='text-color'>Bangladesh is a small country all over the world.</h1>
        <p className = {styles.myHeadingLine}>Rajshahi is the division of Bangladesh.</p>
    </div>
  )
}

export default page