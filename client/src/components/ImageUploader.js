import React from 'react'
import PostForm from './PostForm';
import { useContext, createContext, useState } from 'react';
import FileForm from './FileForm';
import LatestImage from './LatestImage';
import { AppContext } from './AddProjectContainer';



function ImageUploader({handleSubmitImage, latestPost, setLatestPost}) {
  // const {latestPost, setLatestPost} = useContext(AppContext)

  return (
    <AppContext.Provider value={{latestPost, setLatestPost}}>
    <div className="App">
    <FileForm latestPost={latestPost} setLatestPost={setLatestPost} handleSubmitImage={handleSubmitImage} />
    <LatestImage latestPost={latestPost} setLatestPost={setLatestPost}/>
    </div>
    </AppContext.Provider>
  )
}

export default ImageUploader