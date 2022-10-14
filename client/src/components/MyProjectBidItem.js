import React from 'react'

export default function MyProjectBidItem({bid, handleAcceptBid}) {



  return (
    
            <div className="d-flex align-itMms-center mb-15px">
                <div className="widget-img rounded-3 me-10px">
                     <img className="h-100 w-100" src={bid.professional_image}  style={{'object-fit':'fill'}}>
                     </img>
                </div>
                 <div className="text-truncate">
                    <div> {`Placed by ${bid.professional_name}`}
                    </div>
                <div className="text-gray-500">{`Bid Amount: $${bid.amount}`}</div>
                </div>
                <div className="ms-auto text-center">
                    <div className="fs-13px">{`Bid Amount: $${bid.amount}`}
                    </div>
                   
                </div>
                <button class="ms-auto btn btn-gray btn-primary btn-sm" onClick={()=>handleAcceptBid(bid)}>Accept
                </button>
                    
            </div>
  )
}
