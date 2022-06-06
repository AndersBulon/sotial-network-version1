import React from "react";
import style from "./Post.module.css";

function Post (props) {
   return (
     <article className={style.article}>
       <div className={style.logo}>
         <img
			  className={style.postimg}
           src={props.avatar}
           alt=""
         />
       </div>
       <div className={style.posttext}>
         {props.postText}
       </div>
		 <div className={style.annotation}>
			 <div>
				Likes: <span  className={style.like}>{props.like}</span> 
			 </div>
			 <div>
				 ID: <span  className={style.like}>{props.id}</span>
			 </div>
			 
		 </div>
	
     </article>
   )
}

export default Post;