import {useEffect, useState } from 'react';
import AddProjectMap from './AddProjectMap'
import AddProjectForm from './AddProjectForm';
import FileForm from './FileForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
  

export default function AddProjectContainer({setProjectList, projectList}) {
  const user = useSelector(state=>state)
  const history = useNavigate();

  const [imageData, setImageData] = useState([])
  const [coords, setCoords] = useState({lat: null, lng: null})
  const [projectData, setProjectData] = useState({title:null, description:null})
  const [submission, setSubmission] = useState({title: null, description: null, client_id: user.id, lat: null, lng: null})

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

  function handleAddImageToImageData(newImage){
    const newImageData = [...imageData]
    newImageData.push(newImage)
    setImageData(newImageData)
    
  }

  function handleSubmitProjectToAPI(){
    //first submit the proposal form
    fetch("/proposals", {method: "POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(submission)})
      .then(response=>response.json())
      .then(d=>{
        //set project list to the returned data with no images
            const newProj = {...d, posts:[]}
            const newList = [...projectList, newProj]; 
            setProjectList(newList);

        //then submit the image post
            imageData.forEach(
              data=>{
                fetch("/posts", {method: "POST", body: data}).then(response=>response.json()).then(i=>{
                  // and with every image post, update project list to include the image data
                  newProj.posts.push(i)
                  let newListWithImage = [...projectList, newProj]
                  setProjectList(newListWithImage)
                }).catch(e=>console.log(e))
                    })    
          });
    history(`/myprojects`)
  }

  return (
    <div>
        <AddProjectMap setCoords={setCoords} projectList={projectList} />
        <FileForm handleAddImageToImageData={handleAddImageToImageData} />
        <ul>{imageData.map(e=><li>{e.get('post[image]').name}</li>)}</ul>
        <AddProjectForm handleSubmitProjectToAPI={handleSubmitProjectToAPI} projectData={projectData} setProjectData={setProjectData} />
    </div>
  )
}

