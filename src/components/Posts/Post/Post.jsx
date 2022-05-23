import React from "react";
import style from "./Post.module.css";

function Post () {
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
         ПОСТ БЛОК
       </div>
     </article>
   )
}

export default Post;