import React from "react";
import style from "./Profileinfo.module.css";

function Profileinfo() {
	return (
		<div className={`${style.profile} profile`}>
			<h2 className={`${style.nick} nick designe`}>Profile Nickname</h2>
			<div className={`${style.avatar} avatar`}>
				<img
					className={style.img}
					src="https://art.ngfiles.com/images/632000/632176_eliasgz_cool-avatar-drawing.png?f1534043519"
					alt=""
				/>
			</div>
			<div className={`${style.userinfo} userinfo designe`}>
				<h3 className={style.profileTitle}>My profile</h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Perspiciatis repudiandae dolore in atque ipsum tenetur aut eligendi
					sunt voluptatem libero labore ad amet, adipisci neque animi id dolores,
					illo mollitia ex iusto deserunt ipsam odit voluptates eveniet? Commodi
					voluptate recusandae dolor corrupti facilis iure, animi libero quibusdam
					repudiandae molestiae aliquid!
				</p>
			</div>
		</div>
	);
}

export default Profileinfo;
