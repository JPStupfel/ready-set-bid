import React, {useEffect, useState} from 'react';
import { GoogleMap, InfoBox, LoadScript, Marker, OverlayView, withGoogleMap } from '@react-google-maps/api';
import CustomMarker from './CustomMarker';

const API_KEY = process.env.REACT_APP_API_KEY;




const MapContainer = ({projectList}) => {

  const markers = projectList.map(
    project=><CustomMarker key={project.id} project={project} />)

  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};

    
  
  const defaultCenter = {
    lat: projectList.length ? projectList[0].lat : 0,
    lng: projectList.length ? projectList[0].lng : 0
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

