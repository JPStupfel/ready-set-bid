import React from 'react'
import { useParams } from 'react-router-dom';

import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewMyProjectPage({projectList}) {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     const thisProject = projectList.filter(e=>e.id===id_num)
     const projectImages = thisProject[0]['posts'] ? thisProject[0]['posts'].map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />) : null

    

  return (
    <div>
    <MapContainer projectList={thisProject}/>
    {projectImages}
</div>
  )
}
