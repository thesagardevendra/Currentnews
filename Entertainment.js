
import React, { useEffect, useState } from 'react';
import axios from "axios";
function Entertainment() {

             const[title,setTitle]=useState();
    const [description, setDescription]=useState();
    const [author, setAuthor]=useState();
    const [image, setImage]=useState();
    const [publish, setPuslish]=useState();

   
    useEffect(()=>{
  async function getData(){
    const res=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9118714b727f4e1b98d33cf2d38e2922`);
   console.log(res.data);
    setTitle(res.data.articles[0].title);
    setDescription(res.data.articles[0].description);
    setAuthor(res.data.articles[0].author);
    setImage(res.data.articles[0].urlToImage);
    setPuslish(res.data.articles[0].publishedAt)
    
  }
  getData();
    })
   
    return (

        <div className="Main">
            <h1>Entertainment</h1>
<img src={image} width="500"/>
 <p>Title:<strong>{title}</strong></p>
 <p>Description:<strong>{description}</strong></p>
 <p>Author:<strong>{author}</strong></p>
 <p>Published At:<strong>{publish}</strong></p>
        </div>
    )
}

export default Entertainment
