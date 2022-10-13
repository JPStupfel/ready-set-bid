import React, {useState} from 'react'
import SignupClientForm from './SignupClientForm'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SignupProForm from './SignupProForm';


export default function SignupContainer({setUser}) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'I am a Client', value: '1' },
        { name: 'I am a Professional', value: '2' }      ];
    

  return (
      <div className="login login-v1">
				<div className="login-container">
					<div className="login-header">
						<div className="brand">
							<div className="d-flex align-items-center">
								READY<b>Set</b>BID 
							</div>
							<small>Log in or Sign up to Access Features</small>
						</div>
						<div className="icon">
							<i className="fa fa-lock"></i>
						</div>
					</div>
          <div className='signupContainer'>
            {radioValue === '1' ? <SignupClientForm setUser={setUser} /> : <SignupProForm setUser={setUser}/>}
          </div>
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
        </div> 
		  </div>
  )
}
