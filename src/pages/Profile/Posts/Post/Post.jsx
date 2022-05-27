import React from "react";
import style from "./Post.module.css";

function Post (props) {
   return (
     <article className={style.article}>
       <div className={style.logo}>
         <img
			  className={style.postimg}
           src="https://avatarfiles.alphacoders.com/224/224801.jpg"
           alt=""
         />
       </div>
       <div className={style.posttext}>
         {props.postText}
       </div>
		 <div>
			 Likes: <span  className={style.like}>{props.like}</span>
		 </div>
     </article>
   )
}

export default Post;