import React, {useState} from 'react'
import {useNavigate}  from 'react-router-dom'

export default function LoginClientForm({setUser}) {
    const [formData, setFormData] = useState({username: null, password: null})
    const history = useNavigate();
    const [error, setError] = useState('')

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
        if (d.errors){setError(d.errors)}
	      else {setUser(d); 
        history('/myprojects')}
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
  <div className="login-body">
						<div className="login-content fs-13px">
							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-20px">
									<input onChange={handleChange}   type="text" className="form-control fs-13px h-45px" id="username" placeholder="Username" />
									<label htmlFor="emailAddress" className="d-flex align-items-center py-0">username</label>
								</div>
								<div className="form-floating mb-20px">
									<input onChange={handleChange}  type="password" className="form-control fs-13px h-45px" id="password" placeholder="Password" />
									<label htmlFor="password" className="d-flex align-items-center py-0">Password</label>
								</div>
                <label className="form-check-label text-danger" >
									{error}
								</label>
								<div className="form-check mb-20px">
									<input className="form-check-input" type="checkbox" value="" id="rememberMe" />
									<label className="form-check-label" htmlFor="rememberMe">
										Remember Me
									</label>
								</div>
								<div className="login-buttons">
									<button type="submit" className="btn h-45px btn-success d-block w-100 btn-lg">Sign me in</button>
								</div>
							</form>
						</div>
					</div>
       
  
  
  
  )
}

