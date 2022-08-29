import React from 'react';
import MapContainer from './MapContainer'
import ProjectCard from './ProjectCard';

export default function ProjectsPage({projectList}) {

const projectCards = projectList.map(e=><ProjectCard key={e.id} project={e} />)


  return (
    <div>
        <MapContainer projectList={projectList}/>
        {projectCards}
    </div>
  )
}
