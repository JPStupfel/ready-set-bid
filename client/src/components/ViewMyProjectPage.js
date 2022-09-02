import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewMyProjectPage({projectList}) {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     
    
     const [currentProject, setCurrentProject] = useState(null)
     useEffect(()=>{
        fetch(`/proposals/${id_num}`).then(r=>r.json()).then(d=>setCurrentProject(d))
     },[])
    
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}


     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)

     const bidList = currentProject.bids.map((e, i)=><li>{`Bid ${i+1}: $${e.amount}. Placed by ${e.professional_name}`}</li>)

  return (
    <div>
    <MapContainer projectList={[currentProject]}/>
    {projectImages}
    <ul>
        {bidList}
    </ul>
</div>
  )
}
