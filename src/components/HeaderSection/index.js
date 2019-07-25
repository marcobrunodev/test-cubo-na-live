import React from "react"
import "./styles.css"

import TitleCubo from "../../objects/TitleCubo"
import SubtitleCubo from "../../objects/SubtitleCubo"

const HeaderSection = () => (
  <header className="header-section">
    <TitleCubo content="Serviços" section />
    <SubtitleCubo content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
  </header>
)

export default HeaderSection
