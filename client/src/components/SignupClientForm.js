import React, {useState} from 'react'

export default function SignupClientForm() {
    const [formData, setFormData] = useState({username: null, password: null, password_confirmation: null})

function handleSubmit(event){
    event.preventDefault()
    fetch("/session", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(r=>r.json()).then(d=>console.log(d)).catch(e=>console.log(e))
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
    <div className="form-group">
      <label>Password Confirmation</label>
      <input onChange={handleChange}  type="password" className="form-control" id="password_confirmation" placeholder="Confirm Password"/>
    </div>
    <div className="form-check">

    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
