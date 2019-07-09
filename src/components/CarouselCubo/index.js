import React from "react"
import "./styles.css"
import ImageFirst from "../../images/carousel-first.png"

import CardCubo from "../../objects/CardCubo"
import TitleCubo from "../../objects/TitleCubo"
import DescriptionCubo from "../../objects/DescriptionCubo"
import BulletCubo from "../../objects/BulletCubo"
import ArrowCubo from "../../objects/ArrowCubo"

const CarouselCubo = () => (
  <ol className="carousel-cubo">
    <li className="left">
      <ArrowCubo content="Anterior" isActive rightOrLeft="left" />
    </li>
    <li className="item">
      <img className="image" src={ImageFirst} alt="Lorem ipsum dolor" />

      <div className="content container">
        <CardCubo>
          <TitleCubo content="Lorem ipsum dolor" />
          <DescriptionCubo content="Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene." />
        </CardCubo>
      </div>
    </li>
    <li className="right">
      <ArrowCubo content="Próximo" isActive rightOrLeft="right" />
    </li>
  </ol>
)

export default CarouselCubo
