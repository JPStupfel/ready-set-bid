import React from 'react';
// import API from "../adapters/API";

const PostForm = props => {

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("post[image", event.target.image.files[0])
    console.log(event.target)
    
   
    // submitPost(formData)

    //   .then(data => props.setPost(data.post))
    //   .catch(console.error);
  }


    // const submitPost = formData => {
    //     const config = {
    //       method: "POST",
    //       headers: {
    //         "Authorization": localStorage.getItem("token"),
    //         "Accept": "application/json"
    //       },
    //       body: formData
    //     }

    //     return fetch(POSTS_URL, config)
    //       .then(res => res.json());
    //   }

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="caption">
        Caption
        <input type="text" name="caption" />
      </label>
      <label htmlFor="image" >
        Upload image
        <input type="file" name="image" accept="image/*" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  
}

export default PostForm;