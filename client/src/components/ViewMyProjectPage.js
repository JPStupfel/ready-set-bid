import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import MapContainer from './MapContainer'
import MyProjectBidList from './MyProjectBidList';
import VewMyProjectImageCard from './VewMyProjectImageCard';

export default function ViewMyProjectPage({setProjectList}) {
     let  {id} = useParams();
     const id_num = parseInt(id,10)
     
     const [isEditDesc, setIsEditDesc] = useState(false)
     const [currentProject, setCurrentProject] = useState(null)
     const history = useNavigate();
     const [description, setDescription] = useState('')

     useEffect(()=>{
        fetch(`/proposals/${id_num}`).then(r=>r.json()).then(d=>setCurrentProject(d))
     },[])
     
     function deleteProject(event){
        fetch(`/proposals/${id_num}`, {method: "DELETE"}).catch(e=>console.log(e))
        setProjectList(projectList=>projectList.filter(project=>project.id!==id_num))
        history('/myprojects')
     }

     function handleAcceptBid(bid){
       fetch(`/proposals/${id_num}`, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({victor_id: bid.professional_id })}).then(r=>r.json()).then(d=>{const newCurrentProject = {...currentProject}; newCurrentProject.victor_id = d.victor_id; setCurrentProject(newCurrentProject)})
  }
    function handleChange(event){
      setDescription(event.target.value)
    }

    function handleSubmit(event){
      event.preventDefault();
      // console.log(description)
      setIsEditDesc(prev=>!prev)

      // handle the patch
      fetch(`/proposals/${id_num}`, {method: "PATCH", headers:{'Content-Type':'application/json'}, body: JSON.stringify({'description': description })}).then(r=>r.json()).then(d=>{const newCurrentProject = {...currentProject}; newCurrentProject.description = d.description; setCurrentProject(newCurrentProject)})

      // reset state
    }
      
     // catch ref error while fetching.
     while (!currentProject){return(<>Loading!</>)}

     const projectImages =  currentProject.posts.map(e=><VewMyProjectImageCard key={e.id} image={e.image_url} />) 
     const victorBid = currentProject.victor_id ? currentProject.bids.find(bid=>bid.professional_id==currentProject.victor_id) : null
     const descriptionEditor = <form onSubmit={handleSubmit}><input onChange={handleChange} value={description}></input></form>
  return (
    <div>
      {/* <h1>{currentProject.title}</h1>
      <MapContainer projectList={[currentProject]}/>
      {isEditDesc ? descriptionEditor : <div onClick={()=>setIsEditDesc(prev=>!prev)}>{currentProject.description}</div>}
      <div className='project-image-container'>
         {projectImages}
      </div>
      {!currentProject.victor_id ? <MyProjectBidList handleAcceptBid={handleAcceptBid} currentProject={currentProject}/> : <div><h1>This project has been won by {victorBid.professional_name} for ${victorBid.amount} </h1><p1>{victorBid.professional_name} will contact you at {currentProject.client.email}.</p1></div>}
      <button onClick={deleteProject}>Delete this Project</button> */}

<div>

				<div className="d-sm-flex align-items-center mb-3">
				</div>

				<div className="row">
{/* TOTAL SALES BAR */}
					<div className="col-xl-6">
						<div className="card border-0 mb-3 overflow-hidden bg-gray-800 text-white">
							<div className="card-body">
								<div className="row">
									<div className="col-xl-7 col-lg-8">
										<div className="mb-3 text-gray-500">
											<b>TOTAL SALES</b>
											<span className="ms-2">
												<i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Total sales" data-bs-placement="top" data-bs-content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."></i>
											</span>
										</div>
										<div className="d-flex mb-1">
											<h2 className="mb-0">$64,559.25</h2>
											<div className="ms-auto mt-n1 mb-n1">
											{!currentProject.victor_id ? <MyProjectBidList handleAcceptBid={handleAcceptBid} currentProject={currentProject}/> : <div><h1>This project has been won by {victorBid.professional_name} for ${victorBid.amount} </h1><p1>{victorBid.professional_name} will contact you at {currentProject.client.email}.</p1></div>}
											</div>
										</div>
										<div className="mb-3 text-gray-500">
											<i className="fa fa-caret-up"></i> 33.21% compare to last week
										</div>
										<hr className="bg-white-transparent-2" />
										<div className="row text-truncate">
											<div className="col-6">
												<div className="fs-12px text-gray-500">Total sales order</div>
												<div className="fs-18px mb-5px fw-bold">1,568</div>
												<div className="progress h-5px rounded-3 bg-gray-900 mb-5px">
													<div className="progress-bar progress-bar-striped rounded-right bg-teal" style={{width: '55%'}}></div>
												</div>
											</div>
											<div className="col-6">
												<div className="fs-12px text-gray-500">Avg. sales per order</div>
												<div className="fs-18px mb-5px fw-bold">$41.20</div>
												<div className="progress h-5px rounded-3 bg-gray-900 mb-5px">
													<div className="progress-bar progress-bar-striped rounded-right" style={{width: '55%'}}></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
										<img src="/assets/img/svg/img-1.svg" alt="" height="150px" className="d-none d-lg-block" />
									</div>
								</div>
							</div>
						</div>
					</div>
{/* TOTAL SALES BAR */}
{/* FIRST ROW */}

					<div className="col-xl-6">
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

							<div className="col-xl-4 col-lg-6">
								<div className="card border-0 mb-3 bg-gray-800 text-white">
									<div className="card-body">
										<div className="mb-3 text-gray-500">
											<b>TOP PRODUCTS BY UNITS SOLD</b>
											<span className="ms-2 "><i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels."></i></span>
										</div>
										<div className="d-flex align-items-center mb-15px">
											<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
												<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-8.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
											</div>
											<div className="text-truncate">
												<div>Apple iPhone XR (2021)</div>
												<div className="text-gray-500">$799.00</div>
											</div>
											<div className="ms-auto text-center">
												<div className="fs-13px">195</div>
												<div className="text-gray-500 fs-10px">sold</div>
											</div>
										</div>
										<div className="d-flex align-items-center mb-15px">
											<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
												<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-9.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
											</div>
											<div className="text-truncate">
												<div>Apple iPhone XS (2021)</div>
												<div className="text-gray-500">$1,199.00</div>
											</div>
											<div className="ms-auto text-center">
												<div className="fs-13px">185</div>
												<div className="text-gray-500 fs-10px">sold</div>
											</div>
										</div>
										<div className="d-flex align-items-center mb-15px">
											<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
												<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-10.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
											</div>
											<div className="text-truncate">
												<div>Apple iPhone XS Max (2021)</div>
												<div className="text-gray-500">$3,399</div>
											</div>
											<div className="ms-auto text-center">
												<div className="fs-13px">129</div>
												<div className="text-gray-500 fs-10px">sold</div>
											</div>
										</div>
										<div className="d-flex align-items-center mb-15px">
											<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
												<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-11.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
											</div>
											<div className="text-truncate">
												<div>Huawei Y5 (2021)</div>
												<div className="text-gray-500">$99.00</div>
											</div>
											<div className="ms-auto text-center">
												<div className="fs-13px">96</div>
												<div className="text-gray-500 fs-10px">sold</div>
											</div>
										</div>
										<div className="d-flex align-items-center">
											<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
												<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-12.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
											</div>
											<div className="text-truncate">
												<div>Huawei Nova 4 (2021)</div>
												<div className="text-gray-500">$499.00</div>
											</div>
											<div className="ms-auto text-center">
												<div className="fs-13px">55</div>
												<div className="text-gray-500 fs-10px">sold</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
	{/* SECOND COMPONENT FIRST ROW */}

					</div>
				</div>
{/* END FIRST ROW */}



				
				<div className="row">
					<div className="col-xl-4 col-lg-6">
						
						<div className="card border-0 mb-3 bg-gray-900 text-white">
							<div className="card-body" style={{ background: 'no-repeat bottom right', backgroundImage: 'url(/assets/img/svg/img-4.svg)', backgroundSize: 'auto 60%'}}>
								<div className="mb-3 text-gray-500 ">
									<b>SALES BY SOCIAL SOURCE</b>
									<span className="text-gray-500 ms-2"><i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Sales by social source" data-bs-placement="top" data-bs-content="Total online store sales that came from a social referrer source."></i></span>
								</div>
								<h3 className="mb-10px">$55,547.89</h3>
								<div className="text-gray-500 mb-1px"><i className="fa fa-caret-up"></i> 45.76% increased</div>
							</div>
							<div className="widget-list rounded-bottom dark-mode">
							
									<div className="widget-list-media icon">
										<i className="fab fa-apple bg-indigo text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Apple Store</div>
									</div>
									<div className="widget-list-action text-nowrap text-gray-500">
										$34,840.17
									</div>
							
									<div className="widget-list-media icon">
										<i className="fab fa-facebook-f bg-blue text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Facebook</div>
									</div>
									<div className="widget-list-action text-nowrap text-gray-500">
										$12,502.67
									</div>
						 
									<div className="widget-list-media icon">
										<i className="fab fa-twitter bg-info text-white"></i>
									</div>
									<div className="widget-list-content">
										<div className="widget-list-title">Twitter</div>
									</div>
									<div className="widget-list-action text-nowrap text-gray-500">
										$4,799.20
									</div>
						
									<div className="col-xl-4 col-lg-6">
						<div className="card border-0 mb-3 bg-gray-800 text-white">
							<div className="card-body">
								<div className="mb-3 text-gray-500">
									<b>TOP PRODUCTS BY UNITS SOLD</b>
									<span className="ms-2 "><i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels."></i></span>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-8.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XR (2021)</div>
										<div className="text-gray-500">$799.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">195</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-9.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XS (2021)</div>
										<div className="text-gray-500">$1,199.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">185</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-10.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XS Max (2021)</div>
										<div className="text-gray-500">$3,399</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">129</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-11.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Huawei Y5 (2021)</div>
										<div className="text-gray-500">$99.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">96</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-12.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Huawei Nova 4 (2021)</div>
										<div className="text-gray-500">$499.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">55</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
							</div>
						</div>

					</div>

					<div className="col-xl-4 col-lg-6">
						<div className="card border-0 mb-3 bg-gray-800 text-white">
							<div className="card-body">
								<div className="mb-3 text-gray-500">
									<b>TOP PRODUCTS BY UNITS SOLD</b>
									<span className="ms-2 "><i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels."></i></span>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-8.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XR (2021)</div>
										<div className="text-gray-500">$799.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">195</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-9.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XS (2021)</div>
										<div className="text-gray-500">$1,199.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">185</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-10.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Apple iPhone XS Max (2021)</div>
										<div className="text-gray-500">$3,399</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">129</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center mb-15px">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-11.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Huawei Y5 (2021)</div>
										<div className="text-gray-500">$99.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">96</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<div className="widget-img rounded-3 me-10px bg-white p-3px w-30px">
										<div className="h-100 w-100" style={{background: 'url(/assets/img/product/product-12.jpg) center no-repeat', backgroundSize: 'auto 100%'}}></div>
									</div>
									<div className="text-truncate">
										<div>Huawei Nova 4 (2021)</div>
										<div className="text-gray-500">$499.00</div>
									</div>
									<div className="ms-auto text-center">
										<div className="fs-13px">55</div>
										<div className="text-gray-500 fs-10px">sold</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6">
						<div className="card border-0 mb-3 bg-gray-800 text-white">
							<div className="card-body">
								<div className="mb-3 text-gray-500">
									<b>MARKETING CAMPAIGN</b>
									<span className="ms-2"><i className="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Marketing Campaign" data-bs-placement="top" data-bs-content="Campaign that run for getting more returning customers."></i></span>
								</div>
								<div className="row align-items-center pb-1px">
									<div className="col-4">
										<div className="h-100px d-flex align-items-center justify-content-center">
											<img src="/assets/img/svg/img-2.svg" alt="" className="mw-100 mh-100" />
										</div>
									</div>
									<div className="col-8">
										<div className="mb-2px text-truncate">Email Marketing Campaign</div>
										<div className="mb-2px  text-gray-500  fs-11px">Mon 12/6 - Sun 18/6</div>
										<div className="d-flex align-items-center mb-2px">
											<div className="flex-grow-1">
												<div className="progress h-5px rounded-pill bg-white bg-opacity-10">
													<div className="progress-bar progress-bar-striped bg-indigo" style={{width: '80%'}}></div>
												</div>
											</div>
											<div className="ms-2 fs-11px w-30px text-center">80%</div>
										</div>
										<div className="text-gray-500 small mb-15px text-truncate">
											57.5% people click the email
										</div>
									
									</div>
								</div>
								<hr className="bg-white-transparent-2 mt-20px mb-20px" />
								<div className="row align-items-center">
									<div className="col-4">
										<div className="h-100px d-flex align-items-center justify-content-center">
											<img src="/assets/img/svg/img-3.svg" alt="" className="mw-100 mh-100" />
										</div>
									</div>
									<div className="col-8">
										<div className="mb-2px text-truncate">Facebook Marketing Campaign</div>
										<div className="mb-2px  text-gray-500  fs-11px">Sat 10/6 - Sun 18/6</div>
										<div className="d-flex align-items-center mb-2px">
											<div className="flex-grow-1">
												<div className="progress h-5px rounded-pill bg-white bg-opacity-10">
													<div className="progress-bar progress-bar-striped bg-warning" style={{width: '60%'}}></div>
												</div>
											</div>
											<div className="ms-2 fs-11px w-30px text-center">60%</div>
										</div>
										<div className="text-gray-500 small mb-15px text-truncate">
											+124k visitors from facebook
										</div>
								
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>








   </div>
  )
}
