import React from 'react'
import PostForm from './PostForm';
import { useContext, createContext, useState } from 'react';
import FileForm from './FileForm';
import { AppContext } from './AddProjectContainer';



function ImageUploader({setImageData}) {

  return (
    <div className="App">
    <FileForm setImageData={setImageData} />
    </div>
  )
}

export default ImageUploader