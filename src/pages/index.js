import React from "react"

import Coin from "../images/coin.png"
import Box from "../images/box.png"
import Bagde from "../images/badge.png"
import Setting from "../images/setting.png"

import "../styles/settings/index.css"
import "../styles/tools/tricks.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import SectionCubo from "../objects/SectionCubo"
import HeaderCubo from "../components/HeaderCubo"
import CarouselCubo from "../components/CarouselCubo"
import HeaderSection from "../components/HeaderSection"
import ServiceCubo from "../components/ServiceCubo"

const services = [
  {
    src: Coin,
    alt: "Icon Coin",
    title: "rhoncus purus in",
    description:
      "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    src: Box,
    alt: "Icon Box",
    title: "mattis augue tristique",
    description:
      "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    src: Bagde,
    alt: "Icon Bagde",
    title: "elementum lacus vitae",
    description:
      "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    src: Setting,
    alt: "Icon Setting",
    title: "Mauris bibendum odio ligula",
    description:
      "Donec sit amet erat ut quam dignissim bibendum porta enim, ut acor tempor felis diam non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
]

export default () => (
  <>
    <HeaderCubo />
    <CarouselCubo />
    <SectionCubo>
      <HeaderSection />

      {services.map(({ src, alt, title, description }) => (
        <ServiceCubo
          src={src}
          alt={alt}
          title={title}
          description={description}
        />
      ))}
    </SectionCubo>
  </>
)
