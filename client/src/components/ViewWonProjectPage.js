import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewWonProjectPage() {
  let  {id} = useParams();
  const id_num = parseInt(id,10)
  const user = useSelector(state=>state)
  const [currentProject, setCurrentProject] = useState(null)

  useEffect(()=>{
    fetch(`/proposals/${id_num}`).then(r=>r.json()).then(
      d=>{if (d.victor_id == user.id){setCurrentProject(d)}})},[])
  // catch ref error while fetching.
  while (!currentProject){return(<>Loading!</>)}

  const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)
  const victorBid = currentProject.victor_id ? currentProject.bids.find(bid=>bid.professional_id==currentProject.victor_id) : null
  
  return (
<div>
      <div>
				<div className="d-sm-flex align-items-center mb-3">
				</div>
{/* FIRST ROW */}
				<div className="row">
					<div className="col-12">
						<div className="row">
{/* FIRST COMPONENT FIRST ROW */}
							<div className="col-sm-6">
								<div className="card border-0 text-truncate mb-3 bg-gray-800 text-white">
									<div className="card-body" >
										<MapContainer projectList={[currentProject]}/>
									</div> 
								</div>
							</div>
{/* FIRST COMPONENT FIRST ROW */}
{/* SECOND COMPONENT FIRST ROW */}
							<div className="col-md-6 col-sm-6 col-sm-pull-6">
								<div className="card border-0 mb-3 bg-gray-800 text-white">
									<div className="card-body">
                    <h1>{currentProject.title}
                    </h1>
                    <div>{currentProject.description}
                    </div>
                    <br/>
                    <h2>You have won this project for ${victorBid.amount}
                    </h2>
                    <p>Contact {currentProject.client.username} at {currentProject.client.email}
                    </p>								
                  </div>
								</div>
							</div>
						</div>
	{/* SECOND COMPONENT FIRST ROW */}
					</div>
				</div>
{/* END FIRST ROW */}
				<div className="row">
					<div className="col-12">
						<div className="card border-0 mb-3 bg-gray-900 text-white">
							<div className="card-body" style={{ background: 'no-repeat bottom right', backgroundImage: 'url(/assets/img/svg/img-4.svg)', backgroundSize: 'auto 60%'}}>
								<div className="mb-3 text-gray-500 ">
									<b>Project Images</b>
								</div>
							</div>
							<div className="widget-list rounded-bottom dark-mode">
							<div className='gallery-v2' id="gallery">
								{projectImages}
							</div>																									
							</div>
						</div>
					</div>					
				</div>
			</div>
    </div>
  )
}
