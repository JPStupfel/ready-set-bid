import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function LatestImage() {
    const {latestPost, setLatestPost} = useContext(AppContext)
  
    useEffect(()=>{
        fetch('/latest').then(r=>r.json()).then(d=>setLatestPost(d.image_url)).catch(e=>console.log(e))
    },[latestPost])
  
    return (
    <div>
        <img src={latestPost} alt="latest post" className='latest-image' />
    </div>
  )
}

export default LatestImage