import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button';

function FileForm({handleAddImageToImageData}) {

    const [url, setUrl] = useState([])

   function handleSubmit(event){
    event.preventDefault();
    const data= new FormData();
    data.append("post[title]", event.target.title.value)
    data.append("post[image]", event.target.image.files[0])
    handleAddImageToImageData(data)
    let url = URL.createObjectURL(event.target.image.files[0])
    setUrl(prev=>[...prev, url])
   }

   const images = url.length ? url.map(e=>
    <div className="gallery">
      <a href={e} className="ratio ratio-4x3" data-pswp-src="../assets/img/gallery/gallery-1.jpg" data-pswp-width="1200" data-pswp-height="800">
        <img src={e}/>
      </a>
    </div>
    ) : null

  return (
      <div>
        <h1>Upload Images Here</h1>
        <form onSubmit={handleSubmit}>
          <input type='file' name="Image" id="image"/>
          <br/>
          <Button className="btn-gray" variant="primary" type="submit"> Attach Photo to Project! </Button>
        </form>
        <div className='gallery-v2' id="gallery">
        {images}
        </div>
      </div>
  )
}

export default FileForm