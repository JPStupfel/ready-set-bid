import React from 'react'

export default function MyProjectBidItem({bid}) {
  return (
    <li class="list-group-item">
    <div className='bid-container'>
        <button>Accept Bid</button>
        <img className='bid-image' src={bid.professional_image} />
        <ul >
            <li > {`Bid Amount: $${bid.amount}`}</li>
            <li >  {`Placed by ${bid.professional_name}  `}</li>
        </ul>
    </div>
</li>
  )
}
