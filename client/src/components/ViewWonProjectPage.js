import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewWonProjectPage() {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     const user = useSelector(state=>state)
     const [currentProject, setCurrentProject] = useState(null)
  
     useEffect(()=>{
        fetch(`/proposals/${id_num}`).then(r=>r.json()).then(
         d=>{
            
            if (d.victor_id == user.id){setCurrentProject(d)}
        })
     },[])

     
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}


     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)
     const victorBid = currentProject.victor_id ? currentProject.bids.find(bid=>bid.professional_id==currentProject.victor_id) : null

    
  return (
    <div>
    <h1>{currentProject.title}</h1>
    <MapContainer projectList={[currentProject]}/>
   {<h2>You have won this project for ${victorBid.amount}</h2>}
   {<>Contact {currentProject.client.username} at {currentProject.client.email}</>}
   <div className='project-image-container'>
    {projectImages}
  </div>

</div>
  )
}
