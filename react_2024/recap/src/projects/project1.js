import React,{useState,useEffect} from 'react'
import "./file.json"

export default function Project1(props) {
    const[list, setList] = useState([]);

    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {console.log(data);setList(data);})
        .catch(error => console.log(error));
        },[]);

  return (
    <div className='Project1'>
        {list.map((val, index)=>{
            return(
                <div key={index}>
                    <p>{val.name}</p>
                    <p>{val.email}</p>
                    <p>{val.phone}</p>
                    <p>{val.website}</p>
                    <br></br>
                </div>
            )
        })}
    </div>
  )
}
