import React, {useState} from 'react'
import LoginClientForm from './LoginClientForm'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import LoginProForm from './LoginProForm';
import '/Users/jpstupfel/Development/code/phase-5/ready-set-bid/client/src/components/scss/react.scss'


export default function LoginContainer({setUser}) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'I am a Client', value: '1' },
        { name: 'I am a Professional', value: '2' }      ];
    

  return (
    <>
    <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            style={radioValue === radio.value ? {'backgroundColor':'blue'} : null}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
{/* 
      <div className='signupContainer'>
      {radioValue === '1' ?   <LoginClientForm setUser={setUser} /> : <LoginProForm setUser={setUser}/>}
      </div> */}

<div className="login login-v1">
				<div className="login-container">
					<div className="login-header">
						<div className="brand">
							<div className="d-flex align-items-center">
								<span className="logo"></span> <b>Color</b> Admin
							</div>
							<small>Bootstrap 5 Responsive Admin Template</small>
						</div>
						<div className="icon">
							<i className="fa fa-lock"></i>
						</div>
					</div>
					<div className="login-body">
						<div className="login-content fs-13px">
							<form onSubmit={console.log('hi')}>
								<div className="form-floating mb-20px">
									<input type="email" className="form-control fs-13px h-45px" id="emailAddress" placeholder="Email Address" />
									<label htmlFor="emailAddress" className="d-flex align-items-center py-0">Email Address</label>
								</div>
								<div className="form-floating mb-20px">
									<input type="password" className="form-control fs-13px h-45px" id="password" placeholder="Password" />
									<label htmlFor="password" className="d-flex align-items-center py-0">Password</label>
								</div>
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
				</div>
			</div>

    </>
  
  )
}
