import React, {useEffect, useState} from 'react';
import { GoogleMap, InfoBox, LoadScript, Marker, OverlayView, withGoogleMap } from '@react-google-maps/api';
import CustomMarker from './CustomMarker';

const API_KEY = process.env.REACT_APP_API_KEY;




const MapContainer = ({projectList}) => {

  const markers = projectList.map(
    project=><CustomMarker project={project} />)

      // {name:project.title, location:{lat:project.lat, lng: project.lng}}
   

  // const markers = locations.map(item => <CustomMarker item={item} />)

  
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
            markers
         }
         </GoogleMap>
        
        
     </LoadScript>
  )
}
export default MapContainer;

