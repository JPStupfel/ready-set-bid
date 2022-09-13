import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import MapContainer from './MapContainer'
import MyProjectBidList from './MyProjectBidList';
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewMyProjectPage({setProjectList}) {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     
     const [isEditDesc, setIsEditDesc] = useState(false)
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
       fetch(`/proposals/${id_num}`, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({victor_id: bid.professional_id })}).then(r=>r.json()).then(d=>{const newCurrentProject = {...currentProject}; newCurrentProject.victor_id = d.victor_id; setCurrentProject(newCurrentProject)})
  }
    
      
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}

     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />) 
     const victorBid = currentProject.victor_id ? currentProject.bids.find(bid=>bid.professional_id==currentProject.victor_id) : null
     const DescriptionEditor = ()=><form><input type='text' value={currentProject.description}></input></form>
  return (
    <div>
      <h1>{currentProject.title}</h1>
      <MapContainer projectList={[currentProject]}/>
      <div onClick={()=>setIsEditDesc(prev=>!prev)}>{!isEditDesc ? currentProject.description : <DescriptionEditor/>}</div>
      <div className='project-image-container'>
         {projectImages}
      </div>
      {!currentProject.victor_id ? <MyProjectBidList handleAcceptBid={handleAcceptBid} currentProject={currentProject}/> : <div><h1>This project has been won by {victorBid.professional_name} for ${victorBid.amount} </h1><p1>{victorBid.professional_name} will contact you at {currentProject.client.email}.</p1></div>}
      <button onClick={deleteProject}>Delete this Project</button>
   </div>
  )
}
