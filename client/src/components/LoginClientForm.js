import React, {useState} from 'react'
import {useNavigate}  from 'react-router-dom'

export default function LoginClientForm({setUser}) {
    const [formData, setFormData] = useState({username: null, password: null})
    const history = useNavigate();

function handleSubmit(event){
    event.preventDefault()
    fetch("/session", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(r=>r.json())
      .then(d=>{
        setUser(d);
        history('/myprojects')
      }
        ).catch(e=>console.log(e))
}

function handleChange(event){
    const id = event.target.id
    const input = event.target.value
    const newFormData ={...formData}
    newFormData[id] = input
    setFormData(newFormData)
}
  return (

    <form onSubmit={handleSubmit}>

    <div className="form-group">
      <label>Username</label>
      <input onChange={handleChange} type="text" className="form-control" id="username"  placeholder="Enter username"/>

    </div>
    <div className="form-group">
      <label>Password</label>
      <input onChange={handleChange}  type="password" className="form-control" id="password" placeholder="Password"/>
    </div>
    <div className="form-check">

    </div>
   
    <div className="form-check">

    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
