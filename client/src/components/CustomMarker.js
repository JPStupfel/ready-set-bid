import React from 'react'
import { GoogleMap, InfoBox, LoadScript, Marker, OverlayView, withGoogleMap } from '@react-google-maps/api';


export default function CustomMarker({item}) {
  return (
    <Marker optimized={false} title={'fish'} key={item.name} position={item.location}>
      <InfoBox
     position={item.location}
     options={{  enableEventPropagation: true }}
   >
     <div style={{ backgroundColor: `yellow` }}>
       <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
         {item.name}
       </div>
     </div>
   </InfoBox>
   </Marker>
  )
}
