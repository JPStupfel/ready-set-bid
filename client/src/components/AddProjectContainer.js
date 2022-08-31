import { createContext, useState } from 'react';
import AddProjectMap from './AddProjectMap'
import ImageUploader from './ImageUploader'
import AddProjectForm from './AddProjectForm';
  
export const AppContext = createContext(null);

export default function AddProjectContainer({projectList}) {
  const [latestPost, setLatestPost] = useState(AppContext)
  const [imageData, setImageData] = useState(AppContext)


  function handleSubmitImage(data){
    // fetch("/posts", {method: "POST", body: data}).then(response=>{response.json()}).then(data=>{console.log(data); setLatestPost(data.image_url)}).catch(e=>console.log(e))
    setImageData(data)
  }

  return (
    <div>
        <AddProjectMap projectList={projectList} />
        <ImageUploader latestPost={latestPost} setLatestPost={setLatestPost} handleSubmitImage={handleSubmitImage} />
        <AddProjectForm />

    </div>
  )
}
