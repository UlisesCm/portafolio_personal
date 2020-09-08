import React from "react"
import IcTwitter from "../../../images/icons/twitter.svg"
import IcFacebook from "../../../images/icons/facebook.svg"
import IcLinkedin from "../../../images/icons/linkedin.svg"
import IcInstagram from "../../../images/icons/instagram.svg"

import "./Social.scss"

const socialMedia = [
  {
    icon: <IcTwitter />,
    link: "https://twitter.com/UlisesCipres",
  },
  {
    icon: <IcFacebook />,
    link: "https://www.facebook.com/ulises.cipres",
  },
  {
    icon: <IcInstagram />,
    link: "https://www.instagram.com/ulisesciprea/",
  },
  {
    icon: <IcLinkedin />,
    link:
      "https://www.linkedin.com/in/edgar-ulises-cipr%C3%A9s-medina-061620184/",
  },
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
