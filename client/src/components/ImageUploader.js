import React from 'react'
import PostForm from './PostForm';
import { useContext, createContext, useState } from 'react';
import FileForm from './FileForm';
import { AppContext } from './AddProjectContainer';



function ImageUploader({handleSubmitImage}) {

  return (
    <div className="App">
    <FileForm handleSubmitImage={handleSubmitImage} />
    </div>
  )
}

export default ImageUploader