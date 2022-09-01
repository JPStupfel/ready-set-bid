import React from 'react';
import MapContainer from './MapContainer'
import ProjectClientCard from './ProjectClientCard';

export default function MyProjectsPage({projectList}) {

const projectCards = projectList.map(e=><ProjectClientCard key={e.id} project={e} />)


  return (
    <div>
        <MapContainer projectList={projectList}/>
        {projectCards}
    </div>
  )
}
