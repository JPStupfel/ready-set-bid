import React from 'react'

export default function MyProjectBidItem({bid, handleAcceptBid}) {



  return (
        <li className="list-group-item">
            <div className='bid-container'>
                <button onClick={()=>handleAcceptBid(bid)}>Accept Bid</button>
                <img alt='profile' className='bid-image' src={bid.professional_image} />
                <ul >
                    <li > {`Bid Amount: $${bid.amount}`}</li>
                    <li >  {`Placed by ${bid.professional_name}  `}</li>
                </ul>
            </div>
        </li>
  )
}
