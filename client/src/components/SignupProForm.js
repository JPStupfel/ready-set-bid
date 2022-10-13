import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignupProForm({setUser}) {
    const [formData, setFormData] = useState({username: null, password: null, password_confirmation: null, image_url: null})
    const history = useNavigate()

function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    fetch("/sessionPro", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(r=>r.json()).then(d=>{setUser(d);history('/projects')}).catch(e=>console.log(e))
}

function handleChange(event){
    const id = event.target.id
    const input = event.target.value
    const newFormData ={...formData}
    newFormData[id] = input
    setFormData(newFormData)
}
return (
  <div className="login-body">
    <div className="login-content fs-13px">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-20px">
          <input onChange={handleChange}   type="text" className="form-control fs-13px h-45px" id="username" placeholder="Username" />
          <label htmlFor="username" className="d-flex align-items-center py-0">Username</label>
        </div>
        <div className="form-floating mb-20px">
          <input onChange={handleChange}  type="password" className="form-control fs-13px h-45px" id="password" placeholder="Password" />
          <label htmlFor="password" className="d-flex align-items-center py-0">Password</label>
        </div>
        <div className="form-floating mb-20px">
          <input onChange={handleChange}  type="password" className="form-control fs-13px h-45px" id="password_confirmation" placeholder="Confirm Password" />
          <label htmlFor="password_confirmation" className="d-flex align-items-center py-0">Confirm Password</label>
        </div>
        <div className="form-floating mb-20px">
          <input onChange={handleChange}  type="text" className="form-control fs-13px h-45px" id="image_url" placeholder="Profile Picture Url" />
          <label htmlFor="password_confirmation" className="d-flex align-items-center py-0">Profile Picture Url</label>
        </div>
        <div className="form-floating mb-20px">
          <input onChange={handleChange}  type="text" className="form-control fs-13px h-45px" id="email" placeholder="Enter username" />
          <label htmlFor="password_confirmation" className="d-flex align-items-center py-0">Enter Email</label>
        </div>
        <div className="form-check mb-20px">
          <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>
        <div className="login-buttons">
          <button type="submit" className="btn h-45px btn-success d-block w-100 btn-lg">Sign me up</button>
        </div>
      </form>
    </div>
  </div>
)
}
