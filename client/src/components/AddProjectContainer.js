import { createContext, useState } from 'react';
import AddProjectMap from './AddProjectMap'
import ImageUploader from './ImageUploader'
  
export const AppContext = createContext(null);

export default function AddProjectContainer({projectList}) {
  const [latestPost, setLatestPost] = useState(AppContext)

  function handleSubmitImage({imageData}){
    console.log(imageData)
  }

  return (
    <div>
        <ImageUploader latestPost={latestPost} setLatestPost={setLatestPost} handleSubmitImage={handleSubmitImage} />
        <AddProjectMap projectList={projectList} />
    </div>
  )
}
