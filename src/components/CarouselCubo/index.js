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
      id: 0,
      active: true,
      src: ImageFirst,
      alt: "1 - Lorem ipsum dolor",
      title: "1 - Lorem ipsum dolor",
      description:
        "Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene.",
    },
    {
      id: 1,
      active: false,
      src: ImageFirst,
      alt: "2 - Lorem ipsum dolor",
      title: "2 - Lorem ipsum dolor",
      description:
        "Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene.",
    },
    {
      id: 2,
      active: false,
      src: ImageFirst,
      alt: "3 - Lorem ipsum dolor",
      title: "3 - Lorem ipsum dolor",
      description:
        "Aenean ultrices ultricies vulputate. Donec ut pulvinar ipsum. Maecenas tincidunt lorem at enim pharetra hendrerit vivamus in elemene.",
    },
  ])

  const handleClickBullet = (event, id) => {
    event.preventDefault()

    setItems(old => old.map(item => ({ ...item, active: id === item.id })))
  }

  return (
    <div className="wrapper-carousel-cubo">
      <ol className="carousel-cubo">
        <li className="left">
          <ArrowCubo content="Anterior" isActive rightOrLeft="left" />
        </li>
        {items.map(({ src, alt, title, description, active }) => (
          <li className={`item ${active ? "-active" : ""}`}>
            <img className="image" src={src} alt={alt} />

            <div className="content container">
              <CardCubo>
                <TitleCubo content={title} />
                <DescriptionCubo content={description} />
              </CardCubo>
            </div>
          </li>
        ))}
        <li className="right">
          <ArrowCubo content="Próximo" isActive rightOrLeft="right" />
        </li>
      </ol>

      <ol className="bullets">
        {items.map(({ id, active }) => (
          <li key={id} className="bullet">
            <BulletCubo
              isActive={active}
              onClick={event => handleClickBullet(event, id)}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CarouselCubo
