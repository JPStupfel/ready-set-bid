import React, {useEffect, useState} from 'react';
import { GoogleMap, StandaloneSearchBox, LoadScript, Marker, withGoogleMap } from '@react-google-maps/api';
import CustomMarker from './CustomMarker';

const API_KEY = process.env.REACT_APP_API_KEY;




const AddProjectMap = ({projectList}) => {

  const thisaddress = '1625 wilderness gate rd Santa Fe, NM'

  
  
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};

    
  
  const [defaultCenter, setDefaultCenter] = useState({
    lat: projectList.length ? projectList[0].lat : 0,
    lng: projectList.length ? projectList[0].lng : 0
  })

  const [address, setAddres] = useState('')
  console.log(address)
  return (
     <LoadScript
       googleMapsApiKey= {API_KEY}
       libraries={["places"]}>
        <StandaloneSearchBox
      // ref={props.onSearchBoxMounted}
      // bounds={props.bounds}
      // onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        onChange={(event)=>setAddres(event.target.value)}
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
     
    </StandaloneSearchBox>
    <button onClick={(event)=>console.log(address)}>Go</button>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
  

         </GoogleMap>
        
        
     </LoadScript>
  )
}
export default AddProjectMap;

