import React from 'react'
import MyProjectBidItem from './MyProjectBidItem'

export default function MyProjectBidList({currentProject}) {
    

    const bidList = currentProject.bids.map((e)=><MyProjectBidItem bid={e}/>
            
                                            )



  return (
    <>
        <h1>Project Bids</h1>
        <ul class="list-group">
            {bidList}
        </ul>
    </>
  )
}
