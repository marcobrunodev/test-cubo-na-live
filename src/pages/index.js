import React from "react"

import "../styles/settings/index.css"
import "../styles/tools/tricks.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import TitleCubo from "../objects/TitleCubo"
import SubtitleCubo from "../objects/SubtitleCubo"
import HeaderCubo from "../components/HeaderCubo"
import CarouselCubo from "../components/CarouselCubo"

export default () => (
  <>
    <HeaderCubo />
    <CarouselCubo />
    <section>
      <TitleCubo content="Serviços" section />
      <SubtitleCubo content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </section>
  </>
)
