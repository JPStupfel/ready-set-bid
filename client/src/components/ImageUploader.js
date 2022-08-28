import React from 'react'
import MapContainer from './MapContainer';
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
    <MapContainer />
    <FileForm />
    <LatestImage/>
    </div>
    </AppContext.Provider>
  )
}

export default ImageUploader