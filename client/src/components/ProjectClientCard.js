import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function ProjectClientCard({project}) {
  const history = useNavigate();
  // if (project.title == 'q'){debugger}
  const image = project.posts.length ? project.posts[0].image_url : 'fish'

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <div>will display first image here</div>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>history(`/myprojects/${project.id}`)}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectClientCard;