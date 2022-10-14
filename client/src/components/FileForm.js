import React from 'react'
import Button from 'react-bootstrap/esm/Button';

function FileForm({handleAddImageToImageData}) {


   function handleSubmit(event){
    event.preventDefault();
    const data= new FormData();
    data.append("post[title]", event.target.title.value)
    data.append("post[image]", event.target.image.files[0])
    handleAddImageToImageData(data)
   }



  return (
      <div>
        <h1>Upload Images Here</h1>
        <form onSubmit={handleSubmit}>
          <input type='file' name="Image" id="image"/>
          <br/>
          <Button className="btn-gray" variant="primary" type="submit"> Attach Photo to Project! </Button>
        </form>
      </div>
  )
}

export default FileForm