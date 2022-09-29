import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import CustomMarker from './CustomMarker';

const API_KEY = process.env.REACT_APP_API_KEY_GOOGLE_EARTH_JS;




const MapContainer = ({projectList}) => {

  const markers = projectList.map(
    project=><CustomMarker key={project.id} project={project} />)

  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};

    
  
  const defaultCenter = {
    lat: projectList.length ? projectList[0].lat : 0,
    lng: projectList.length ? projectList[0].lng : 0
  }
  
  return (
     <LoadScript
       googleMapsApiKey= {API_KEY}>

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

