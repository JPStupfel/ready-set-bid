import {useEffect, useState } from 'react';
import AddProjectMap from './AddProjectMap'
import AddProjectForm from './AddProjectForm';
import FileForm from './FileForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VewMyProjectImageCard from './VewMyProjectImageCard';
  

export default function AddProjectContainer() {
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
       

        //then submit the image post
            imageData.forEach(
              data=>{
                fetch("/posts", {method: "POST", body: data}).then(response=>response.json()).then(i=>{                  
                }).catch(e=>console.log(e))
                    })    
          });
    history(`/myprojects`)
  }


  return (
        <div>
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
                      <AddProjectMap setCoords={setCoords} />
                      </div> 
                    </div>
                  </div>
        {/* FIRST COMPONENT FIRST ROW */}
        {/* SECOND COMPONENT FIRST ROW */}
                  <div className="col-md-6 col-sm-6 col-sm-pull-6">
                    <div className="card border-0 mb-3 bg-gray-800 text-white">
                      <div className="card-body">
                        <AddProjectForm handleSubmitProjectToAPI={handleSubmitProjectToAPI} projectData={projectData} setProjectData={setProjectData} />
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
                      <FileForm handleAddImageToImageData={handleAddImageToImageData} />
                      <b><ul>{imageData.map(e=><li>{e.get('post[image]').name}</li>)}</ul></b>
                    </div>
                  </div>
                  <div className="widget-list rounded-bottom dark-mode">
                  <div className='gallery-v2' id="gallery">
                  </div>																									
                  </div>
                </div>
              </div>					
            </div>
          </div>
        </div>
  )
}

