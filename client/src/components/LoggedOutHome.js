import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';

export default function LoggedOutHome() {

    const [fadeProp, setFadeProp] = useState(false)

    useEffect(()=>{
        const timeOut = setTimeout(()=>{setFadeProp(true);}, 700)

        //  return () => clearInterval(timeOut)
    },[])

  return (
        <Container>
            <h1>Welcome to Ready Set Bid!</h1>
            <h2>Log in or Signup!</h2>
            <fader className={fadeProp ? 'fade-in' : 'fade-out'}>  
            
                    <div className="d-grid gap-2">
  
                    </div> 
                    <button class="bg-[#1da1f2] text-black size-lrg scale-x-10">
                    Or Explore the site as a guest
                    </button>
                    
                
            </fader>
           
        </Container>
    

    )
}
