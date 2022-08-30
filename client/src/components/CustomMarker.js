import React from 'react'
import { GoogleMap, InfoBox, LoadScript, Marker, OverlayView, withGoogleMap } from '@react-google-maps/api';


export default function CustomMarker({project}) {
        // {name:project.title, location:{lat:project.lat, lng: project.lng}}
        const location = {lat:project.lat, lng: project.lng}

  return (
    <Marker optimized={false} title={'fish'} key={project.title} position={location}>
      <InfoBox
     position={location}
     options={{  enableEventPropagation: true }}
   >
     <div style={{ backgroundColor: `yellow` }}>
       <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
         {project.title}
       </div>
     </div>
   </InfoBox>
   </Marker>
  )
}
