import React, { useContext } from 'react'
import { AppContext } from "./AddProjectContainer"

function FileForm({setImageData}) {


   function handleSubmit(event){
    event.preventDefault();
    const data= new FormData();
    data.append("post[title]", event.target.title.value)
    data.append("post[image]", event.target.image.files[0])
    setImageData(data)
   }



  return (
    <div>
        <h1>FileForm</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type='text' name="title" id="title"/>
        <br/>

        <label htmlFor="image">Image</label>
        <input type='file' name="Image" id="image"/>
        <br/>
        <button type="submit">Create Post</button>
        </form>
    </div>
  )
}

export default FileForm