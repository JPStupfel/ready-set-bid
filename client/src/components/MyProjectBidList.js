import React from 'react'

export default function MyProjectBidList({currentProject}) {
    
    const bidList = currentProject.bids.map((e, i)=>
    
    <li class="list-group-item">
        <div className='bid-container'>
            <button>Accept Bid</button>
            <img className='bid-image' src={e.professional_image} />
            <ul >
                <li > {`Bid ${i+1}: $${e.amount}`}</li>
                <li >  {`Placed by ${e.professional_name}  `}</li>
            </ul>
        </div>
    </li>
  
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
