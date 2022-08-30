import React, {useEffect, useState} from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
 
const API_KEY = process.env.REACT_APP_API_KEY;




const MapContainer = ({projectList}) => {

  const locations = projectList.map(
    project=>{
      return {name:project.title, location:{lat:project.lat, lng: project.lng}}
    }
  )
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};

    
  
  const defaultCenter = {
    lat: 41.3954,
    lng: 2.162 
  }
  
  return (
     <LoadScript
       googleMapsApiKey= {API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >

           {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
         </GoogleMap>
        
     </LoadScript>
  )
}
export default MapContainer;