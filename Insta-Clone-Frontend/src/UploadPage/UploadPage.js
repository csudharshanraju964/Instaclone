import React from "react";
import { useNavigate } from 'react-router-dom';
import "./upload.css";

const Upload = () => {
    const navigate = useNavigate();

   
    const handleSubmit = async (e) => {
       
        e.preventDefault()
        let data =e.target
        let formData=new FormData(data)
        await fetch('https://insta-backend-3sch.onrender.com/posts',{method:"POST",body:formData})
        .then(res=> res.json()).then((d)=>{
            alert("post successful")
            console.log(d);
        }).catch((e)=>{console.log(e.message)}).finally(()=>{navigate("/InstaClone")})
    }
    return (
        <div className="uploadcontainer">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="file" required placeholder="file" name="PostImage"  className="btn" id="image"/>
                <input type="text" required placeholder="author" name="name"  />
                <input type="text" required placeholder="enter location" name="location"  />
                <input type="text" required placeholder="post description" name="description"  />
                <button type="submit">Upload Post</button>
            </form>
        </div>
    )
}
export default Upload;