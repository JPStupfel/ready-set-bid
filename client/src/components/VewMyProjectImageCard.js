import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function VewMyProjectImageCard({image}) {
  const history = useNavigate();

  // const image = project.posts.length ? project.posts[0].image_url : ''

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
    </Card>
  );
}

export default VewMyProjectImageCard;