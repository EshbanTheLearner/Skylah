import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function TFollow() {
  return (
    <div className="">
    <a
        href="https://www.github.com//"
        className="github social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
    <a
        href="https://www.facebook.com//"
        className="facebook social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://www.twitter.com/" 
        className="twitter social"
        target="_blank"
        >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com//"
        className="linkedin social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
    </div>
  );
}