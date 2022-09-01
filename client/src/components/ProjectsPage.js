import React from 'react';
import MapContainer from './MapContainer'
import ProjectProfessionalCard from './ProjectProfessionalCard';

export default function ProjectsPage({projectList}) {

const projectCards = projectList.map(e=><ProjectProfessionalCard key={e.id} project={e} />)


  return (
    <div>
        <MapContainer projectList={projectList}/>
        {projectCards}
    </div>
  )
}
