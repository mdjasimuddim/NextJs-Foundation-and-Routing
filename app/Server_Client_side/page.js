'use client';
import Menu from '@/Components/Menu';
import styles from '../page.module.css'
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    let json = response.json();
    return json;
}

const page = async() => {
    let data = await getData();

  return (
    <div>
        <Menu />
        <h1 className='text-color'>This is a single Page Applicatin.</h1>
        <p className={styles.myHeadingLine}>lorem ipsum dolar set amet.</p>
        {
            data.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>{item.id}</h2>
                        <h4>{item.title}</h4>
                    </div>
                )
            })
        }
        <img src = {"laptop.jpg"} />
        <button onClick={()=> alert('clicked me!')}>Click Me</button>
    </div>
  )
}

export default page