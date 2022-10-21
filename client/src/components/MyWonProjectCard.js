import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function MyWonProjectCard({project}) {
  const history = useNavigate();
  const image = project.posts.length ? project.posts[0].image_url : ''

  return (
    <li className='grid-cell' datatype='region'>
          <div className='grid-card'>
           <div className='col-12'>
						<div className="image w-100">
							<div className="image-inner">
                <img src={image} alt="" />
							</div>
							  <div className="image-info">
								  <h5 className="title" >{project.title}
                  </h5>
								  <div className="d-flex align-items-center mb-2">
									  <div className="ms-auto">
									  </div>
								  </div>
								  <div className="desc">
                    {project.description}								
                  </div>
                  <br/>
                  <Button className="btn-gray" variant="primary" onClick={()=>history(`/my_projects_won/${project.id}`)}>
                    View Project
                  </Button>
							  </div>
						  </div>
            </div>
          </div>
        </li>



  );
}

export default MyWonProjectCard;