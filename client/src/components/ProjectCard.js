import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({project}) {

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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;