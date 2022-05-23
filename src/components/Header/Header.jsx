import React from "react";
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={`${style.header} grid designe header`}>
      <img
        className={style.img}
        src="https://www.flaticon.com/svg/vstatic/svg/3917/3917538.svg?token=exp=1652426533~hmac=f5631c1a516e5ebc325c88b4243469c9"
        alt="logo"
      />
      <h1>Sotial NetworK</h1>
    </header>
  );
};

export default Header;
