import React, {useState} from 'react'
import { GoogleMap, InfoBox, LoadScript, Marker, OverlayView, withGoogleMap } from '@react-google-maps/api';


export default function CustomMarker({project}) {

        const [showInfo, setShowInfo] = useState(false)

        const location = {lat:project.lat, lng: project.lng}

        const image = project.posts.length ? project.posts[0].image_url : ''


        const info =    
        <InfoBox
        position={location}
        options={{  closeBoxURL: ``, enableEventPropagation: true }}
        onCloseClick={()=>console.log('deed')}
        >
        <div style={{ backgroundColor: `yellow`,' max-width':'200px' }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            {project.title}
          </div>
          <img src={image} className='map-image' />
          
        </div>
      </InfoBox>

  return (
    <Marker onClick={()=>setShowInfo(p=>!p)} optimized={false} title={'fish'} key={project.title} position={location}>
      
   {showInfo ? info : null}

   </Marker>
  )
}
