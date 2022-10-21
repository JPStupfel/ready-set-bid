import MapContainer from './MapContainer'
import ProjectClientCard from './ProjectClientCard';
import React, {useState, useEffect} from 'react';

export default function MyProjectsPage() {

  // for fetching projects
  const [offset, setOffset] = useState(0)
  const [projectList, setProjectList] = useState([])
  useEffect(()=>{
    fetch(`proposals?limit=${6}&offset=${offset}`).then(r=>r.json()).then(d=>setProjectList(d)).catch(e=>console.log(e))
  },[offset])
  // function to change offset +/- int
  function handleChangeOffset(int){
    if (offset + int >=0){setOffset(prev=>setOffset(prev+int))}
    else {console.log('You have reached page 1!')}
  }
  // for color coordinating icons
  const openProjectList = projectList.length ? projectList.filter(project=>!project.victor_id) : null
  const closedProjectList = projectList.length ? projectList.filter(projects=>projects.victor_id) : null
  // for resizing map and scroll bar
  const [thisHeight, setThisHeight] = useState(document.body.clientHeight)
  useEffect(()=>{setThisHeight(document.body.clientHeight); window.addEventListener('resize', ()=>setThisHeight(document.body.clientHeight));
  return () => window.removeEventListener('resize', ()=>setThisHeight(document.body.clientHeight));})
  const scrollStyle={height: `${thisHeight}px`}
  // create project cards
  const ProjectCards = projectList.map(e=><ProjectClientCard key={e.id} project={e} />)

  return (
				  <div id="gallery" className="gallery row gx-0">
            <table>
              <tbody>
                <tr>
                  <td id="page_map_container" style={{"width":"60%", "height":"90%"}}>
                    <MapContainer projectList={projectList}/>
                  </td>
                  <td id="tdSide" width="40%">
                    <table>
                      <tbody>
                        <tr>
                          <td className='column'>
                            <div id="results_scroll" class="padding5" style={scrollStyle}>
                              <div id="roadtripRegionsContainer" class="margin-bottom-45 none" style={{"display": "block;"}}>
                                <ul id="roadtripRegions" class=" grid-row grid-row--gutter grid-row--col-2 grid-row--card-min-200">
                                  {ProjectCards}
                                  <span aria-hidden="true" className="" />	
                                  <div className="btn-group">
                                    <button className="btn btn-outline-inverse" onClick={()=>handleChangeOffset(-6)}>Previous</button>
                                    <button className="btn btn-outline-inverse inactive">Page 1 of 6</button>
                                    <button className="btn btn-outline-inverse" onClick={()=>handleChangeOffset(6)}>Next</button>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}
