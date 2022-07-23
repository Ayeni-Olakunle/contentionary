import React, { Fragment } from "react";
import Logo from "../../Image/logo.png";
import HeaderImage from "../../Image/header-pic.png";
import play from "../../Image/Group 4.png";
import Layout1Style from "./Layout1.module.scss";

function Layout1() {
  return (
    <Fragment>
      <div className={Layout1Style.holdAllFirst}>
        <div className={Layout1Style.holdAllSec}>
          <div className={Layout1Style.holdAllNav}>
            <img src={Logo} alt="Logo" className={Layout1Style.holdList} />
            <div>
              <ul className={Layout1Style.unorderedList}>
                <li>Home</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Marketplace</li>
              </ul>
            </div>
            <div className={Layout1Style.holdButin}>
              <button className={Layout1Style.login}>Login</button>
              <button className={Layout1Style.createAccount}>
                Create Account
              </button>
            </div>
          </div>
          <div className={Layout1Style.landingImage}>
            <div className={Layout1Style.holdText}>
              <h1 className={Layout1Style.h1Style}>
                <span className={Layout1Style.create}>Create</span> your Online
                <br />
                Academy in minutes
              </h1>
              <p className={Layout1Style.pStyle}>
                Share, sell, engage, support and impact your audience/
                <br />
                students using several Apps in Contentionary
              </p>
              <div className={Layout1Style.holdButin}>
                <button className={Layout1Style.createAccount}>
                  Join for free
                </button>
                <div className={Layout1Style.holdLogoPlay}>
                  <img
                    src={play}
                    alt="Logo"
                    className={Layout1Style.logoPlay}
                  />
                  <span className={Layout1Style.spanStyle}>
                    Watch how it works
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={HeaderImage}
                alt="Logo"
                className={Layout1Style.girlImage}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout1;
