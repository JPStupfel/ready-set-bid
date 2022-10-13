import React from 'react';
import MapContainer from './MapContainer'
import ProjectClientCard from './ProjectClientCard';

export default function MyProjectsPage({projectList}) {

  if (!projectList.length){return(<>No Projects Loaded!</>)}

const ProjectCards = projectList.map(e=><ProjectClientCard key={e.id} project={e} />)

  return (
				 <div id="gallery" className="gallery row gx-0">
           <MapContainer projectList={projectList}/>
            {ProjectCards}
          </div>
  )
}
