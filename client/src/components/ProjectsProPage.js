import React from 'react';
import MapContainer from './MapContainer'
import ProjectProfessionalCard from './ProjectProfessionalCard';

export default function ProjectsProPage({projectList}) {

const projectCards = projectList.map(e=><ProjectProfessionalCard key={e.id} project={e} />)


  return (
    <div id="gallery" className="gallery row gx-0">
    <MapContainer projectList={projectList}/>
          {projectCards}
    </div>
  )
}
