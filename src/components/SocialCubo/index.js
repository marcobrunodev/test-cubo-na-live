import React from "react"
import "./styles.css"
import Facebook from "../../images/facebook.png"
import Instagram from "../../images/instagram.png"
import Twitter from "../../images/twitter.png"
import YouTube from "../../images/youtube.png"

import { IconSocial } from "../../objects"

const SocialCubo = () => (
  <ul className="social-cubo">
    <li className="social">
      <IconSocial src={Facebook} alt="Logo da Facebook" />
    </li>
    <li className="social">
      <IconSocial src={Instagram} alt="Logo da Instagram" />
    </li>
    <li className="social">
      <IconSocial src={Twitter} alt="Logo da Twitter" />
    </li>
    <li className="social">
      <IconSocial src={YouTube} alt="Logo da YouTube" />
    </li>
  </ul>
)

export default SocialCubo
