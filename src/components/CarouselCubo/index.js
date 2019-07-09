import React, { useState } from "react"
import "./styles.css"
import ImageFirst from "../../images/carousel-first.png"

import CardCubo from "../../objects/CardCubo"
import TitleCubo from "../../objects/TitleCubo"
import DescriptionCubo from "../../objects/DescriptionCubo"
import BulletCubo from "../../objects/BulletCubo"
import ArrowCubo from "../../objects/ArrowCubo"

const CarouselCubo = () => {
  const [items, setItems] = useState([
    {
      active: true,
      src: ImageFirst,
      alt: "1 - Lorem ipsum dolor",
      title: "1 - Lorem ipsum dolor",
      description:
        "Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene.",
    },
    {
      active: false,
      src: ImageFirst,
      alt: "2 - Lorem ipsum dolor",
      title: "2 - Lorem ipsum dolor",
      description:
        "Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene.",
    },
    {
      active: false,
      src: ImageFirst,
      alt: "3 - Lorem ipsum dolor",
      title: "3 - Lorem ipsum dolor",
      description:
        "Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene.",
    },
  ])

  return (
    <div className="wrapper-carousel-cubo">
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

      <ol className="bullets">
        {items.map(({ active }) => (
          <li className="bullet">
            <BulletCubo isActive={active} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CarouselCubo
