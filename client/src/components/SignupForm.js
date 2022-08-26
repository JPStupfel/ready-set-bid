import React, {useState} from 'react'

export default function SignupForm() {
    const [formData, setFormData] = useState({username: null, password: null, password_confirmation: null})

function onsubmit(event){
    event.preventDefault()

}

function handleChange(event){
    const id = event.target.id
    const input = event.target.value
    const newFormData ={...formData}
    newFormData[id] = input
    setFormData(newFormData)
    console.log(formData)
}
  return (

    <form>

    <div class="form-group">
      <label>Username</label>
      <input onChange={handleChange} type="text" className="form-control" id="username"  placeholder="Enter username"/>

    </div>\
    <div class="form-group">
      <label>Password</label>
      <input onChange={handleChange}  type="password" className="form-control" id="password" placeholder="Password"/>
    </div>
    <div class="form-check">

    </div>
    <div class="form-group">
      <label>Password Confirmation</label>
      <input onChange={handleChange}  type="password" className="form-control" id="password_confirmation" placeholder="Confirm Password"/>
    </div>
    <div class="form-check">

    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}
