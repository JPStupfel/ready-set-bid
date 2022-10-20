import MapContainer from './MapContainer'
import ProjectClientCard from './ProjectClientCard';
import React, {useState, useEffect} from 'react';

export default function MyProjectsPage({projectList}) {
  
  const [thisHeight, setThisHeight] = useState(document.body.clientHeight)
  useEffect(()=>{setThisHeight(document.body.clientHeight); window.addEventListener('resize', ()=>setThisHeight(document.body.clientHeight));
  return () => window.removeEventListener('resize', ()=>setThisHeight(document.body.clientHeight));})
  const scrollStyle={height: `${thisHeight}px`}

if (!projectList.length){return(<>No Projects Loaded!</>)}

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
                            <div id="results_scroll" class="padding5" >
                              <div id="roadtripRegionsContainer" class="margin-bottom-45 none" style={{"display": "block;"}}>
                                <ul id="roadtripRegions" class=" grid-row grid-row--gutter grid-row--col-2 grid-row--card-min-200">
                                {ProjectCards}
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
