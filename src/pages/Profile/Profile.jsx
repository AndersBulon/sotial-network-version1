import React from "react";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={`${style.profile} profile grid`}>
      <h2 className={`${style.nick} nick designe`}>Profile Nickname</h2>
      <div className={`${style.avatar} avatar`}>
        <img
		  	className={style.img}
          src="https://art.ngfiles.com/images/632000/632176_eliasgz_cool-avatar-drawing.png?f1534043519"
          alt=""
        />
      </div>
      <div className={`${style.userinfo} userinfo designe`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam
        dolorum iusto voluptatum molestiae error modi! Doloribus delectus nisi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam
        dolorum iusto voluptatum molestiae error modi! Doloribus delectus nisi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam
        dolorum iusto voluptatum molestiae error modi! Doloribus delectus nisi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam
        dolorum iusto voluptatum molestiae error modi! Doloribus delectus nisi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam
        dolorum iusto voluptatum molestiae error modi! Doloribus delectus nisi
      </div>
    </div>
  );
}

export default Profile;
