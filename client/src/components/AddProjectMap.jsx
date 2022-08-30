import React, {useEffect, useState} from 'react';
import { GoogleMap, StandaloneSearchBox, LoadScript, Marker, withGoogleMap } from '@react-google-maps/api';
import CustomMarker from './CustomMarker';

const API_KEY = process.env.REACT_APP_API_KEY;




const AddProjectMap = ({projectList}) => {

  const [address, setAddress] = useState('')
  const [coordAddress, setCoordAddress] = useState({
      lat: 45,
      lng: -105
    })

    // {title: 'Untitled Project', description: 'My Project', victor_id: null, lat: 35, lng: 105 }

  function getCoordinates(address){
    fetch(`/address/${address}`)
      .then(response => response.json())
      .then(data => setCoordAddress(data))
      
  }
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};

  return (
     <LoadScript
       googleMapsApiKey= {API_KEY}
       libraries={["places"]}>

     
      <input
        type="text"
        placeholder="Customized your placeholder"
        value={address}
        onChange={(event)=>setAddress(event.target.value)}
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
     
    <button onClick={(event)=>{getCoordinates(address)}}>Go</button>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={coordAddress}
        >
          <Marker optimized={false} title={'fish'} position={coordAddress}>
      
   
      </Marker>

         </GoogleMap>
        
        
     </LoadScript>
  )
}
export default AddProjectMap;

