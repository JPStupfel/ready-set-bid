import React from 'react';
import { useSelector } from 'react-redux';
import MapContainer from './MapContainer'
import MyWonProjectCard from './MyWonProjectCard';
export default function MyWonProjectsPage({projectList}) {
const user = useSelector(state=>state)

const myWonProjects = projectList.filter(proj=>proj.victor_id==user.id )
const projectCards = myWonProjects.map(e=><MyWonProjectCard key={e.id} project={e} />)

while (!myWonProjects.length){return(<h1>You have not won any projects</h1>)}
  return (
    <div >
      
        <MapContainer projectList={projectList}/>
          {projectCards}
    </div>
  )
}
