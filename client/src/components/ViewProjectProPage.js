import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MapContainer from './MapContainer'
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewProjectProPage() {
    const user = useSelector(state=>state)
    let  {id} = useParams();
    const id_num = parseInt(id,10)
    const [currentProject, setCurrentProject] = useState(null)
    const [bidAmount, setBidAmount] = useState(0)
    const [hasBid, setHasBid] = useState(false)

    useEffect(()=>{fetch(`/proposals/${id_num}`).then(r=>r.json()).then(d=>{setCurrentProject(d); if (d.bids.find(e=>e.professional_id == user.id)){setHasBid(true)}})},[])
    
    function handleSubmit(event){
      event.preventDefault()
      fetch("/bids", {
         method: 'post',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({amount: bidAmount, proposal_id: id_num}),
       })
       .then(r=>r.json())
       .then(d=>{
         console.log(d);
         setHasBid(true)
       }
         ).catch(e=>console.log(e))
     }

     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}

     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />)
     const bidForm =   <div className="input-group">
                        <input type="text"
                          className="form-control" 
                           placeholder='$Amount'
                          onChange={(e)=>{setBidAmount(e.target.value)}}
                          value={bidAmount}>
                        </input>
                        <Button  type='submit' onClick={e=>handleSubmit(e)}  className="btn-gray" variant="primary">
                          Submit Bid
                        </Button>
                      </div>
                    
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
                  <h1>{currentProject.title}</h1>
                  <div>{currentProject.description}</div>
                  <br/>
                    {hasBid? <>You have already bid on this project</> : bidForm}
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
