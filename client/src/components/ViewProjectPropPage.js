import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewProjectPropPage({projectList, setProjectList}) {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     
    
     const [currentProject, setCurrentProject] = useState(null)
     const history = useNavigate();


     useEffect(()=>{
        fetch(`/proposals/${id_num}`).then(r=>r.json()).then(d=>setCurrentProject(d))
     },[])
     
     function deleteProject(event){
        fetch(`/proposals/${id_num}`, {method: "DELETE"}).catch(e=>console.log(e))
        setProjectList(projectList=>projectList.filter(project=>project.id!==id_num))
        history('/myprojects')
     }
    
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}


     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)

     const bidList = currentProject.bids.map((e, i)=><li>{`Bid ${i+1}: $${e.amount}. Placed by ${e.professional_name}`}</li>)

  return (
    <div>
    <h1>{currentProject.title}</h1>
    <MapContainer projectList={[currentProject]}/>
    {projectImages}
    <ul>
        {bidList}
    </ul>
    <button onClick={deleteProject}>Delete this Project</button>
</div>
  )
}
