import Card from 'react-bootstrap/Card';



function VewMyProjectImageCard({image}) {

  // const image = project.posts.length ? project.posts[0].image_url : ''

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
    </Card>
  );
}

export default VewMyProjectImageCard;