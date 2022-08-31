import {useEffect, useState } from 'react';
import AddProjectMap from './AddProjectMap'
import AddProjectForm from './AddProjectForm';
import FileForm from './FileForm';
  

export default function AddProjectContainer({projectList, loggedInUser}) {

  const [imageData, setImageData] = useState(null)
  const [coords, setCoords] = useState({lat: null, lng: null})
  const [projectData, setProjectData] = useState({title:null, description:null})
  const [submission, setSubmission] = useState({title: null, description: null, client_id: loggedInUser.id, lat: null, lng: null})

  //anytime coords or projectData is updated, update the submission hash
  useEffect(()=>{
  const newSubmission = {...submission}
  newSubmission.title = projectData.title
  newSubmission.description = projectData.description
  newSubmission.lat = coords.lat
  newSubmission.lng = coords.lng
  setSubmission(newSubmission)
  },[coords, projectData]
  )

  function handleSubmitProjectToAPI(){
    //first submit the proposal form
    fetch("/proposals", {method: "POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(submission)}).then(response=>{response.json()}).then(data=>{
      console.log(data); 
      //then submit the image post
      fetch("/posts", {method: "POST", body: imageData}).then(response=>{response.json()}).then(data=>{console.log(data)}).catch(e=>console.log(e))
    }).catch(e=>console.log(e))

  }

  return (
    <div>
        <AddProjectMap setCoords={setCoords} projectList={projectList} />
        <FileForm setImageData={setImageData} />
        <AddProjectForm handleSubmitProjectToAPI={handleSubmitProjectToAPI} projectData={projectData} setProjectData={setProjectData} />
    </div>
  )
}