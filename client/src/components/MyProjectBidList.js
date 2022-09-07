import React from 'react'
import MyProjectBidItem from './MyProjectBidItem'

export default function MyProjectBidList({currentProject, handleAcceptBid}) {
    

    const bidList = currentProject.bids.map((e)=><MyProjectBidItem handleAcceptBid={handleAcceptBid} bid={e}/>)



  return (
    <div className='bid-outline'>
        <h1>Project Bids</h1>
        <ul className="list-group">
            {bidList}
        </ul>
    </div>
  )
}
