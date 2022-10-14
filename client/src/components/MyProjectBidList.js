import React from 'react'
import MyProjectBidItem from './MyProjectBidItem'

export default function MyProjectBidList({currentProject, handleAcceptBid}) {
    

    const bidList = currentProject.bids.map((e)=><MyProjectBidItem key ={e.id} handleAcceptBid={handleAcceptBid} bid={e}/>)
    const victorBid = currentProject.victor_id ? currentProject.bids.find(bid=>bid.professional_id==currentProject.victor_id) : null


  return (
    <div>
      <div className="mb-3 text-gray-500">
        <b>BIDS ON THIS PROJECT!</b>
      </div>
      {!currentProject.victor_id ? <>{bidList}</> : <div><h1>This project has been won by {victorBid.professional_name} for ${victorBid.amount} </h1><p1>{victorBid.professional_name} will contact you at {currentProject.client.email}.</p1></div>}
    </div>

  )
}
