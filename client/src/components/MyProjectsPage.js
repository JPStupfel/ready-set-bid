import MapContainer from './MapContainer'
import ProjectClientCard from './ProjectClientCard';
import React from 'react';

export default function MyProjectsPage({projectList}) {

  if (!projectList.length){return(<>No Projects Loaded!</>)}

const ProjectCards = projectList.map(e=><ProjectClientCard key={e.id} project={e} />)

  return (
				 <div id="gallery" className="gallery row gx-0">
           

            <table>
              <tbody>
                <tr>
                <MapContainer projectList={projectList}/>
                  <td id="tdSide" width="40%">
                    <table>
                      <tbody>
                        <tr>
                          <td className='column'>
                            <div id="results_scroll" class="padding5" style={{"height": "589px"}}>
                              {ProjectCards}
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
