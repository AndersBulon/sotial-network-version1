import React from "react";
import style from "./TopImage.module.css";

function TopImage() {
  return (
    <div className={`${style.img} top-image`}>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4692e9108512257.5fbf40ee3888a.jpg"
        alt=""
      />
    </div>
  );
}

export default TopImage;
