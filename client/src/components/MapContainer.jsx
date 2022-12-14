import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import CustomMarker from './CustomMarker';
import { useState } from 'react';
import { useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY_GOOGLE_EARTH_JS;

  const MapContainer = ({projectList}) => {

  const [thisHeight, setThisHeight] = useState(document.body.clientHeight)
  const [thisWidth, setThisWidth] = useState(document.body.clientWidth)

  useEffect(()=>{setThisHeight(document.body.clientHeight); window.addEventListener('resize', ()=>setThisHeight(document.body.clientHeight));
  return () => window.removeEventListener('resize', ()=>setThisHeight(document.body.clientHeight));},[])
  
  useEffect(()=>{setThisWidth(document.body.clientWidth); window.addEventListener('resize', ()=>setThisWidth(document.body.clientWidth));
  return () => window.removeEventListener('resize', ()=>setThisWidth(document.body.clientWidth));},[])

  const markers = projectList.map(project=><CustomMarker key={project.id} project={project} />)
  const mapStyles = thisWidth > 415 ? {height: thisHeight, width: "100%"} : {height: 300, width: "100%"}
  
  const defaultCenter = {
    lat: projectList.length ? projectList[0].lat : 0,
    lng: projectList.length ? projectList[0].lng : 0
  }
  
  return (
     <LoadScript googleMapsApiKey= {API_KEY}>
      <div className='map-box'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {markers}
        </GoogleMap>
      </div>
     </LoadScript>
  )
}
export default MapContainer;

