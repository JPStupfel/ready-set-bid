import MapContainer from './MapContainer'
import ProjectClientCard from './ProjectClientCard';
import React, {useState, useEffect} from 'react';

export default function MyProjectsPage() {
  // for fetching projects
  const [offset, setOffset] = useState(0)
  const [projectList, setProjectList] = useState([])
  const [search, setSearch] = useState('')
  useEffect(()=>{fetchProposals()},[offset, search])
  function fetchProposals(){fetch(`proposals?limit=${6}&offset=${offset}&search=${search}`).then(r=>r.json()).then(d=>{if (d.length){setProjectList(d)} else {handleChangeOffset(-6);console.log('You have reached the last page!')}}).catch(e=>console.log(e))}
  // function to change offset +/- int
  function handleChangeOffset(int){if (offset + int >=0){setOffset(prev=>setOffset(prev+int))} else {console.log('You have reached page 1!')}}
  // for resizing map and scroll bar
  const [thisHeight, setThisHeight] = useState(document.body.clientHeight)
  useEffect(()=>{setThisHeight(document.body.clientHeight); window.addEventListener('resize', ()=>setThisHeight(document.body.clientHeight));return () => window.removeEventListener('resize', ()=>setThisHeight(document.body.clientHeight));})
  const scrollStyle={height: `${thisHeight}px`}
  // create project cards
  const ProjectCards = projectList.map(e=><ProjectClientCard key={e.id} project={e} />)
  // for Search bar
  function handleChange(event){
    event.preventDefault()
    setSearch(event.target.value)
  }

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
                                <form class="formCustom " name="regionSearch" action="/wosFormCheck.php" method="post">
                                  <div>
                                  </div>
                                    <span role="status" aria-live="polite" class="ui-helper-hidden-accessible">
                                    </span>
                                  <input  onInput={handleChange} value={search} placeholder="Search Projects..." type="text" name="region-gt2-textbasic" id="ac_regionname" style={{"width": "90%"}} class="ui-autocomplete-input" autoComplete="off"/>
                                </form>
                                <ul id="roadtripRegions" class=" grid-row grid-row--gutter grid-row--col-2 grid-row--card-min-200">
                                {ProjectCards}
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
