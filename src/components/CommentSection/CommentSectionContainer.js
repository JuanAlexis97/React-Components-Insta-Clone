// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
const [com, setCom] = useState(dummyData);

  return (
    <div>
      {com.map(e => 
      e.comments.map(c =>
      <>
      {console.log("objectE",com)}
      <Comment comment={c}/>
      </>
        
        )
      )
      }
      
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
