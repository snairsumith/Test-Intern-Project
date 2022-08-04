import React from "react";
import pic from "./images/banner_instructor.png"

function Blog(props){
    return(
        <div className="blog-section">
            <img src={pic} alt="blog" />
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Blog;