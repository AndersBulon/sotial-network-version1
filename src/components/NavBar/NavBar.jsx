import React from "react";
import style from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className={`${style.nav} designe grid navigator`}>
      <div className={style.item}>
        <a className={style.link} href="#s">
          Profile
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="#s">
          Messages
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="#s">
          News
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="#s">
          Music
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="#s">
          Settings
        </a>
      </div>
    </nav>
  );
}

export default NavBar;