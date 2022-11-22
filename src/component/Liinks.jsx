import React,{useState} from 'react'

import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Liinks(props) {

  
  return (
   
 
    <div>
      
         <Nav.Link href="#features"><Link to="/page" className='text-light fw-bold'><button onClick={()=>props.func('men')}
     class="btn btn-dark">men</button></Link></Nav.Link>
    <Nav.Link href="#features"><Link to="/page" className='text-light fw-bold'><button onClick={()=>props.func('women')}
     class="btn btn-dark">women</button></Link></Nav.Link>
    <Nav.Link href="#features"><Link to="/page" className='text-light fw-bold'><button onClick={()=>props.func('kids')}
     class="btn btn-dark">kids</button></Link></Nav.Link>
    </div>



   
   
   
  )
}

export default Liinks;