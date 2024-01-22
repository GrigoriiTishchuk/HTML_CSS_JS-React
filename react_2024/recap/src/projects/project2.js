import React, { useEffect, useState } from "react";
import axios from "axios";


function Project2() {
    const[list, set_list] = useState([]);
    // put async function in useEffect to prevent infinite loop of rendering Student
    useEffect(() => {
        async function Student() {
            const varia = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(varia);
            set_list(varia.data);
        }
        Student();
    }, []);
    
    return (
        <div className="Project2">
            {list.map((value, index) => 
            {
                return (
                    <div key={index}>
                    <p>{value.name}</p>
                    <p>{value.email}</p>
                    <p>{value.phone}</p>
                    <p>{value.website}</p>
                    <br></br>
                </div>
                )
                })

            }
        </div>
    );
}

export default Project2