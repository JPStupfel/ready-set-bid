import React, {useState} from 'react'
import { InfoBox, Marker } from '@react-google-maps/api';


export default function CustomMarker({project}) {

        const [showInfo, setShowInfo] = useState(false)

        const location = {lat:project.lat, lng: project.lng}

        const image = project.posts.length ? project.posts[0].image_url : ''


        const info =    
        <InfoBox
        position={location}
        options={{  closeBoxURL: ``, enableEventPropagation: true }}
        onCloseClick={()=>console.log('close')}
        >
            <div style={{ backgroundColor: `white`,' maxWidth':'100px' }}>
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                {project.title}
              </div>
              <img src={image} alt='' className='map-image' />
              
            </div>
        </InfoBox>
  return (
    <Marker un onClick={()=>setShowInfo(p=>!p)} optimized={false} key={project.title} position={location}>
  
   {showInfo ? info : null}

   </Marker>
  )
}
