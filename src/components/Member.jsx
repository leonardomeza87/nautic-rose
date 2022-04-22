import React from "react";

// import { ReactComponent as IconFacebook } from "../images/";
import { ReactComponent as IconLinkedin } from "../images/logo-linkedin.svg";
import { ReactComponent as IconTwitter } from "../images/logo-twitter.svg";
import { ReactComponent as IconBehance } from "../images/logo-behance.svg";
import { ReactComponent as IconInstagram } from "../images/logo-instagram.svg";
// import { ReactComponent as IconTelegram } from "../images/";

const Member = ({ avatar, nickname, contact, work }) => {
  const { linkedin, twitter, behance, instagram } = contact;

  return (
    <div className="member">
      <div className="avatar">{avatar}</div>
      <div className="group">
        <strong className="nickname">{nickname}</strong>
        <div className="contact">
          {linkedin && (
            <a href={linkedin}>
              <IconLinkedin />
            </a>
          )}
          {twitter && (
            <a href={twitter}>
              <IconTwitter />
            </a>
          )}
          {behance && (
            <a href={behance}>
              <IconBehance />
            </a>
          )}
          {instagram && (
            <a href={instagram}>
              <IconInstagram />
            </a>
          )}
        </div>
      </div>
      <p className="work">{work}</p>
    </div>
  );
};

export default Member;
