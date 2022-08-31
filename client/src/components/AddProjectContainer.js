import { createContext, useEffect, useState } from 'react';
import AddProjectMap from './AddProjectMap'
import ImageUploader from './ImageUploader'
import AddProjectForm from './AddProjectForm';
  

export default function AddProjectContainer({projectList, loggedInUser}) {
  const [imageData, setImageData] = useState(null)
  const [coords, setCoords] = useState({lat: null, lng: null})
  const [projectData, setProjectData] = useState({title:null, description:null})
  const [submission, setSubmission] = useState({title: null, description: null, client_id: loggedInUser.id, lat: null, lng: null, post: {}})

  useEffect(()=>{
  const newSubmission = {...submission}
  newSubmission.title = projectData.title
  newSubmission.description = projectData.description
  newSubmission.lat = coords.lat
  newSubmission.lng = coords.lng
  newSubmission.post = imageData

  setSubmission(newSubmission)
  },[imageData, coords, projectData]
  )

  // const [formData, setFormData] = useState({title: null, description: null, client_id: null, lat: null, lng: null, post: {}})
  function handleSubmitImage(data){
    // fetch("/posts", {method: "POST", body: data}).then(response=>{response.json()}).then(data=>{console.log(data); setLatestPost(data.image_url)}).catch(e=>console.log(e))
    setImageData(data)
  }

  function handleSetCoordinates(coords){
    setCoords(coords)
  }
  function handleSubmitProjectToAPI(){
    console.log(submission)
    fetch("/proposals", {method: "POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(submission)}).then(response=>{response.json()}).then(data=>{console.log(data)}).catch(e=>console.log(e))

  }
  return (
    <div>
        <AddProjectMap handleSetCoordinates={handleSetCoordinates} projectList={projectList} />
        <ImageUploader handleSubmitImage={handleSubmitImage} />
        <AddProjectForm handleSubmitProjectToAPI={handleSubmitProjectToAPI} projectData={projectData} setProjectData={setProjectData} />

    </div>
  )
}
