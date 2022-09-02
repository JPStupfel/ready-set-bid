import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewProjectProPage({projectList, setProjectList}) {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     
    
     const [currentProject, setCurrentProject] = useState(null)
     const [bidAmount, setBidAmount] = useState(0)

     useEffect(()=>{
        fetch(`/proposals/${id_num}`).then(r=>r.json()).then(d=>setCurrentProject(d))
     },[])


     
     function handleSubmit(event){
      event.preventDefault()
      fetch("/bids", {
         method: 'post',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({amount: bidAmount, proposal_id: id_num}),
       })
       .then(r=>r.json())
       .then(d=>{
         console.log(d);
 
       }
         ).catch(e=>console.log(e))
     }

    
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}


     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)


  return (
    <div>
    <h1>{currentProject.title}</h1>
    <MapContainer projectList={[currentProject]}/>


    <form>

      <input 
      type='text'
      placeholder='$Amount'
      onChange={(e)=>{setBidAmount(e.target.value)}}
      value={bidAmount}
      ></input>

      <button
      onClick={e=>handleSubmit(e)} 
      type='submit'
      >Bid on this Project</button>

    </form>


    {projectImages}

</div>
  )
}
