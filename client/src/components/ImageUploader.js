import React from 'react'
import PostForm from './PostForm';
import { createContext, useState } from 'react';
import FileForm from './FileForm';
import LatestImage from './LatestImage';


export const AppContext = createContext(null);

function ImageUploader() {
    const [latestPost, setLatestPost] = useState(AppContext)

  return (
    <AppContext.Provider value={{latestPost, setLatestPost}}>
    <div className="App">
    <FileForm />
    <LatestImage/>
    </div>
    </AppContext.Provider>
  )
}

export default ImageUploader