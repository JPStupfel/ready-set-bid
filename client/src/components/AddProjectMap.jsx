import React, {useState, Link} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Button from 'react-bootstrap/esm/Button';

const API_KEY = process.env.REACT_APP_API_KEY_GOOGLE_EARTH_JS;
const AddProjectMap = ({setCoords}) => {
  const [address, setAddress] = useState('')
  const [coordAddress, setCoordAddress] = useState({
      lat: 41.40,
      lng: 2.18
    })

  //takes address and sets coords to coordinates
  function getCoordinates(address){
    fetch(`/address/${address}`)
      .then(response => response.json())
      .then(data =>{ setCoordAddress(data);
        setCoords(data)
      })  
  }

  const mapStyles = {        
    height: "50vh",
    width: "100%"};

  return (

      <LoadScript
        googleMapsApiKey= {API_KEY}
        libraries={["places"]}>
        <div className="widget-map rounded">
          <div className="widget-input-container">
            <div className="widget-input-icon"></div>
              <div className="widget-input-box">
                <input type="text" className="form-control"
                    placeholder="Type an address and hit GO!"
                    value={address}
                    onChange={(event)=>setAddress(event.target.value)}/>          </div>
                <div className="widget-input-icon">
              </div>
            <div className="widget-input-divider"></div>
          <div className="widget-input-icon"></div>
          <Button className='btn-gray' onClick={(event)=>{getCoordinates(address)}}>Go</Button>
        </div>
        <div className='map-box'>
          <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={coordAddress}>
              <Marker optimized={false} title={'fish'} position={coordAddress}>
              </Marker>
          </GoogleMap>
         </div>
        </div>
      </LoadScript>
  )
}
export default AddProjectMap;

