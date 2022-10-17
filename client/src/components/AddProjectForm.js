import React, {useState} from 'react'


export default function AddProjectForm({handleSubmitProjectToAPI, projectData, setProjectData}) {

const [posts, setPosts] = useState([])

function handleSubmit(event){
   event.preventDefault() 
   handleSubmitProjectToAPI()
}
function handleChange(event){
    const id = event.target.id
    const input = event.target.value
    const newFormData ={...projectData}
    newFormData[id] = input
    setProjectData(newFormData)
}
  return (
  <div className='signup-form'>
    <h1>Create a new project!
    </h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title  
        </label>
        <input onChange={handleChange} type="text" className="form-control" id="title"  placeholder="Enter Project Title"/>
      </div>
      <div className="form-group">
        <label>description
        </label>
        <textarea onChange={handleChange}  type="text" className="form-control" id="description" placeholder="description"/>
      </div>
      <div className="form-check">
      </div>
      <div className="form-check">
      </div>
      <button type="submit" className="btn btn-primary">Submit
      </button>
    </form>
  </div>
  )
}
