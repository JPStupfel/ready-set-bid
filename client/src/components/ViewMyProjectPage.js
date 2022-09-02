import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import MapContainer from './MapContainer'
import MyProjectBidList from './MyProjectBidList';
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewMyProjectPage({projectList, setProjectList}) {
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

     function handleAcceptBid(bid){
       fetch(`/proposals/${id_num}`, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({victor_id: bid.professional_id })})
      console.log('will accept bid', bid.id)
  }
    
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}

     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)


  return (
    <div>
      <h1>{currentProject.title}</h1>
      <MapContainer projectList={[currentProject]}/>
      <div className='project-image-container'>
         {projectImages}
      </div>
      <MyProjectBidList handleAcceptBid={handleAcceptBid} currentProject={currentProject}/>
      <button onClick={deleteProject}>Delete this Project</button>
   </div>
  )
}
