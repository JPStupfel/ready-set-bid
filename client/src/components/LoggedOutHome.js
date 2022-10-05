import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';

export default function LoggedOutHome() {

    const [fadeProp, setFadeProp] = useState(false)
    const [fadeImage, setFadeImage] = useState(false)

    useEffect(()=>{
        const timeOut = setTimeout(()=>{setFadeProp(true);}, 700)
        const timeOutImage = setTimeout(()=>{setFadeImage(true);}, 9000)

          return () => {clearInterval(timeOut); clearInterval(timeOutImage)}
    },[])

  return (
        <body id= {!fadeImage ? "logged-out-home-gif" : "logged-out-home-static"} >
            <fader className={fadeProp ? 'fade-in' : 'fade-out'}>  
                <div id="logged-out-content">
                <h1>Welcome to Ready Set Bid!</h1>
                <h2>Log in or Signup to get started!</h2>
                </div>
            </fader>
        </body>
    

    )
}
