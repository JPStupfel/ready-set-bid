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
     const [description, setDescription] = useState('')

     useEffect(()=>{
        fetch(`/proposals/${id_num}`).then(r=>r.json()).then(d=>setCurrentProject(d))
     },[])
     
     function deleteProject(event){
        fetch(`/proposals/${id_num}`, {method: "DELETE"}).catch(e=>console.log(e))
        setProjectList(projectList=>projectList.filter(project=>project.id!==id_num))
        history('/myprojects')
     }

     function handleAcceptBid(bid){
       fetch(`/proposals/${id_num}`, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({victor_id: bid.professional_id })}).then(r=>r.json()).then(d=>{const newCurrentProject = {...currentProject}; newCurrentProject.victor_id = d.victor_id; setCurrentProject(newCurrentProject); console.log(d)})
  }
    function handleChange(event){
      setDescription(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault();
      // console.log(description)
      setIsEditDesc(prev=>!prev)

      // handle the patch
      fetch(`/proposals/${id_num}`, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({'description': description })}).then(r=>r.json()).then(d=>{const newCurrentProject = {...currentProject}; newCurrentProject.description = d.description; setCurrentProject(newCurrentProject)})

      // reset state
    }
      
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}

     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />) 

     

     const descriptionEditor = <form onSubmit={handleSubmit}><input onChange={handleChange} value={description}></input></form>



  return (
    <div>
      {/* <h1>{currentProject.title}</h1>
      <MapContainer projectList={[currentProject]}/>
      {isEditDesc ? descriptionEditor : <div onClick={()=>setIsEditDesc(prev=>!prev)}>{currentProject.description}</div>}
      <div className='project-image-container'>
         {projectImages}
      </div>
      {!currentProject.victor_id ? <MyProjectBidList handleAcceptBid={handleAcceptBid} currentProject={currentProject}/> : <div><h1>This project has been won by {victorBid.professional_name} for ${victorBid.amount} </h1><p1>{victorBid.professional_name} will contact you at {currentProject.client.email}.</p1></div>}
      <button onClick={deleteProject}>Delete this Project</button> */}

<div>

				<div className="d-sm-flex align-items-center mb-3">
				</div>
{/* FIRST ROW */}
				<div className="row">
					<div className="col-12">
						<div className="row">
{/* FIRST COMPONENT FIRST ROW */}
							<div className="col-sm-6">
								<div className="card border-0 text-truncate mb-3 bg-gray-800 text-white">
									<div className="card-body" >
										<MapContainer projectList={[currentProject]}/>
									</div> 
								</div>
							</div>
{/* FIRST COMPONENT FIRST ROW */}
{/* SECOND COMPONENT FIRST ROW */}
							<div className="col-md-6 col-sm-6 col-sm-pull-6">
								<div className="card border-0 mb-3 bg-gray-800 text-white">
									<div className="card-body">
										<MyProjectBidList handleAcceptBid={handleAcceptBid} currentProject={currentProject}/>
									</div>
								</div>
							</div>
							
						</div>
	{/* SECOND COMPONENT FIRST ROW */}

					</div>
				</div>
{/* END FIRST ROW */}



				
				<div className="row">
					<div className="col-12">
						
						<div className="card border-0 mb-3 bg-gray-900 text-white">
							<div className="card-body" style={{ background: 'no-repeat bottom right', backgroundImage: 'url(/assets/img/svg/img-4.svg)', backgroundSize: 'auto 60%'}}>
								<div className="mb-3 text-gray-500 ">
									<b>SALES BY SOCIAL SOURCE</b>
									fish</div>
							</div>
							<div className="widget-list rounded-bottom dark-mode">
							
							<div className='gallery-v2' id="gallery">
								{projectImages}
							

							</div>
									
						

						
				
							</div>
						</div>

					</div>

					
				</div>
			</div>








   </div>
  )
}
