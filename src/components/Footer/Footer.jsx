import React from "react";
import style from "./Footer.module.css";

function Footer() {
	return (
		<div className={`${style.footer} footer`}>
			<div className="footer__container">
				&#169; Все права защищены 2022 год
			</div>
		</div>
	);
}

export default Footer;
