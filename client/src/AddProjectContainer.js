import React from 'react'
import AddProjectMap from './components/AddProjectMap'
import ImageUploader from './components/ImageUploader'

export default function AddProjectContainer({projectList}) {
  return (
    <div>
        <ImageUploader />
        <AddProjectMap projectList={projectList} />
    </div>
  )
}
