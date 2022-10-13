import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function ProjectClientCard({project}) {
  const history = useNavigate();
  // if (project.title == 'q'){debugger}
  const image = project.posts.length ? project.posts[0].image_url : 'fish'

  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>{project.title}</Card.Title>
    //     <Card.Text>
    //       {project.description}
    //     </Card.Text>
    //     <Button variant="primary" onClick={()=>history(`/myprojects/${project.id}`)}>View Project</Button>
    //   </Card.Body>
    // </Card>

    <div className='col-lg-3 col-md-2'>
						<div className="image w-100">
							<div className="image-inner">
              <img src={image} alt="" />

								<p className="image-caption">
								</p>
							</div>
							<div className="image-info">
								<h5 className="title">Lorem ipsum dolor sit amet</h5>
								<div className="d-flex align-items-center mb-2">
									<div className="rating">
										<span className="star active"></span>
										<span className="star active"></span>
										<span className="star active"></span>
										<span className="star"></span>
										<span className="star"></span>
									</div>
									<div className="ms-auto">
										<small>by</small> 
									</div>
								</div>
								<div className="desc">
									Nunc velit urna, aliquam at interdum sit amet, lacinia sit amet ligula. Quisque et erat eros. Aenean auctor metus in tortor placerat, non luctus justo blandit.
								</div>
							</div>
						</div>
            </div>
  );
}

export default ProjectClientCard;