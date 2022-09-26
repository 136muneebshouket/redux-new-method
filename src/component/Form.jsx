import React from 'react'
import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';


export default function Form2() {
    
     const dispatch=useDispatch();
     const {value} = useSelector((state)=>state.custom)



    const [name, setName] = useState("");
    // const [Value, setValue] = useState([]);
    const [Update, setUpdate] = useState(true);
    const [selectedid, setselectedid] = useState(null);


    const func = (event) => {
        event.preventDefault();
        if (!name) {
            alert("please enter some value");
        }

        else {

            // const alldata = { id: new Date().getTime().toString(), data: name }
           dispatch({
               type: "addvalue",
               payload:name


           });


           

            setName('');
        }
    }



    const del = (index) => {

       
       dispatch({
         type:"delete",
         id:index

       })
       

    }

    const edit = (index) => {
       
        const newtodos = [...value];

        setName(newtodos[index]);
        // setValue(newtodos);
        setUpdate(false);
        setselectedid(index);

    }

    const update = (event) => {
        event.preventDefault();
       
       

        dispatch({
            type: "updatevalue",
            payload:name,
            id:selectedid

        });

        
        setUpdate(true);
        setName('');
    }



    return (
        <>
            <form className='form'>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                
                {Update ? <button onClick={func}>showit</button> :

                   <button onClick={update}>update</button>}
                


            </form>

            <div>
                {value.map((item, index) => {
                    return (

                        <div key={index}>
                            <div>{item}
                             <button onClick={() => del(index)}>delete</button>
                                <button onClick={() => edit(index)}>edit</button>


                            </div>
                        </div>

                    )
                }

                )}

            </div>
        </>
    )
}