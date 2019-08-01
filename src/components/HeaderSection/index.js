import React from "react"
import "./styles.css"

import TitleCubo from "../../objects/TitleCubo"
import SubtitleCubo from "../../objects/SubtitleCubo"

const HeaderSection = ({ title = "", subtitle = "", className = "" }) => (
  <header className={`header-section ${className}`}>
    <TitleCubo content={title} />
    <SubtitleCubo content={subtitle} />
  </header>
)

export default HeaderSection
