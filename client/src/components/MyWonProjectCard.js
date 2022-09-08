import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function MyWonProjectCard({project}) {
  const history = useNavigate();

  const image = project.posts.length ? project.posts[0].image_url : ''

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <div>will display first image here</div>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>history(`/my_projects_won/${project.id}`)}>View Project</Button>
      </Card.Body>
    </Card>
  );
}

export default MyWonProjectCard;