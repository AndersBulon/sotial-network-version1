import React from "react";
import style from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className={`${style.nav} designe grid navigator`}>
      <div className={style.item}>
        <a className={style.link} href="/profile">
          Profile
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="/messages">
          Messages
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="/news">
          News
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="/music">
          Music
        </a>
      </div>
      <div className={style.item}>
        <a className={style.link} href="/settings">
          Settings
        </a>
      </div>
    </nav>
  );
}

export default NavBar;