'use client';
import Menu from "@/Components/Menu";

async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let json = await response.json();
    return json;
}
const page = async() => {
    let data = await getData();
  return (
    <div>
        <Menu />
        <h1 className="text-color">Server_side_Rendering</h1>
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
    </div>
  )
}

export default page