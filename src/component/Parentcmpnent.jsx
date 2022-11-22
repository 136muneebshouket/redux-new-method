import React,{useState} from 'react';
import Childcmponent from './Childcmponent';

function Parentcmponent() {

  const [name, setName] = useState("");
  const [propvalue, setPropvalue] = useState("");




  const usernamefunc=(e)=>{
    e.preventDefault();
  console.log(name)
  setPropvalue(name);
  }


  return (
   <>
<div>
<form className='form'>
                <label>Enter your username:
                    <input
                        type="text"
                     name='username'
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <button onClick={usernamefunc}>give value</button> :

                  



            </form>
            </div>


<br />
<br />
<br />
  <div>
    <Childcmponent value={propvalue}/>
  </div>
   </>
  )
}

export default Parentcmponent