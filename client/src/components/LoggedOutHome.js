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
        // <body id= {!fadeImage ? "logged-out-home-gif" : "logged-out-home-static"} >
        //     <fader className={fadeProp ? 'fade-in' : 'fade-out'}>  
        //         <div id="logged-out-content">
        //         <h1>Welcome to Ready Set Bid!</h1>
        //         <h2>Log in or Signup to get started!</h2>
        //         </div>
        //     </fader>


            
        // </body>
        <div className="coming-soon">
        <div className="coming-soon-header">
            <div className="bg-cover"></div>
            <div className="brand">
                READY<b>Set</b>BID 
            </div>
            <div className="desc">
            <small>Log in or Sign up to Access Features</small>
            </div>
            <div className="timer">
                <div id="timer" className="is-countdown">
                  
                </div>
            </div>
        </div>
        <div className="coming-soon-content">
            <div className="desc">
            Ready-Set-Bid is a bidding wars web application. Let's say you are a homeowner with a huge brush pile in your back yard that you need to have cleaned up. The only problem is, you have no idea how to find someone you can trust to come do the work for a fair price. Enter Ready-Set-Bid. Ready-Set-Bid allows 'Professionals' the opportunity to bid on your project. As a client you simply create an account, upload a few pictures and watch the bids roll in. Once you see a bid that you feel is at a fair price, you click 'accept bid'. That's it.

Likewise for professionals, you can:

1. Create an account.
2. View all the projects which are available for bidding and their location on a map.
3. Make a bid for any number of projects you like.

Once you have won a bid, that bid is updated to include you as the winner and bidding will be closed.            </div>
           
          
        </div>
    </div>

    )
}
