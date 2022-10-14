import Card from 'react-bootstrap/Card';



function VewMyProjectImageCard({image}) {

  // const image = project.posts.length ? project.posts[0].image_url : ''

  return (
          <div className="gallery">
            <a href={image} className="ratio ratio-4x3" data-pswp-src="../assets/img/gallery/gallery-1.jpg" data-pswp-width="1200" data-pswp-height="800">
              <img src={image}/>
            </a>
          
          </div>
  );
}

export default VewMyProjectImageCard;