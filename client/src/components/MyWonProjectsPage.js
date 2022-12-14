import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import MapContainer from './MapContainer'
import MyWonProjectCard from './MyWonProjectCard';

export default function MyWonProjectsPage() {

  // for fetching projects
  const [offset, setOffset] = useState(0)
  const [projectList, setProjectList] = useState([])
  useEffect(()=>{fetch(`proposals?limit=${6}&offset=${offset}&victor=${true}`).then(r=>r.json()).then(d=>{console.log(d); if (d.length){ setProjectList(d)} else {handleChangeOffset(-6);console.log('You have reached the last page!')}}).catch(e=>console.log(e))},[offset])
  // function to change offset +/- int
  function handleChangeOffset(int){if (offset + int >=0){setOffset(prev=>setOffset(prev+int))} else {console.log('You have reached page 1!')}}
  // for resizing map and scroll bar
  const [thisHeight, setThisHeight] = useState(document.body.clientHeight)
  useEffect(()=>{setThisHeight(document.body.clientHeight); window.addEventListener('resize', ()=>setThisHeight(document.body.clientHeight));
  return () => window.removeEventListener('resize', ()=>setThisHeight(document.body.clientHeight));})
  const scrollStyle={height: `${thisHeight}px`}


const projectCards = projectList.map(e=><MyWonProjectCard key={e.id} project={e} />)

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
                            <div id="results_scroll" className="padding5" style={scrollStyle}>
                              <div id="roadtripRegionsContainer" className="margin-bottom-45 none" style={{"display": "block;"}}>
                                <ul id="roadtripRegions" className=" grid-row grid-row--gutter grid-row--col-2 grid-row--card-min-200">
                                {projectCards}
                                </ul>
                                <div className="btn-group">
                                  <button className="btn btn-outline-inverse " onClick={()=>handleChangeOffset(-6)}>Previous</button>
                                  <button className="btn btn-outline-inverse">Showing items {offset + 1} to {offset + 6}</button>
                                  <button className="btn btn-outline-inverse" onClick={()=>handleChangeOffset(6)}>Next</button>
                                </div>
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