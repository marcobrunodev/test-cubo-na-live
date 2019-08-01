import React from "react"

import Coin from "../images/coin.png"
import Box from "../images/box.png"
import Bagde from "../images/badge.png"
import Setting from "../images/setting.png"

import "../styles/settings/index.css"
import "../styles/tools/tricks.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import World from "../images/world.png"
import Cart from "../images/cart.png"
import Like from "../images/like.png"
import Delivery from "../images/delivery.png"

import SectionCubo from "../objects/SectionCubo"
import TitleCubo from "../objects/TitleCubo"
import TextCubo from "../objects/TextCubo"
import HeaderCubo from "../components/HeaderCubo"
import CarouselCubo from "../components/CarouselCubo"
import HeaderSection from "../components/HeaderSection"
import ServiceCubo from "../components/ServiceCubo"
import DonutChart from "../components/DonutChart"
import FeatureCubo from "../components/FeatureCubo"
import ButtonCubo from "../components/ButtonCubo";
import InputCubo from "../objects/InputCubo";

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
    <SectionCubo className="container -service">
      <HeaderSection title="Serviços" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />

      {services.map(({ src, alt, title, description }) => (
        <ServiceCubo
          src={src}
          alt={alt}
          title={title}
          description={description}
        />
      ))}
    </SectionCubo>

    <SectionCubo className="-about">
      <TitleCubo content="Sobre nós" />
      <TextCubo
        content="In sit amet mi sollicitudin, maximus risus sed, eleifend turpis. Ut aliquet fermentum leo eu vestibulum. Aliquam vitae iaculis neque. Proin vitae quam ac lectus fermentum viverra. Vestibulum eu sem lobortis, rhoncus purus in, mattis augue. Proin nec tempor ipsum. Sed eu libero at arcu dictum rhoncus. Vestibulum at tempus felis. Vestibulum mattis tincidunt eleifend.In sit amet mi sollicitudin, maximus risus sed, eleifend turpis. Ut aliquet fermentum leo eu vestibulum. Aliquam vitae iaculis neque. Proin vitae quam ac lectus fermentum viverra. Vestibulum eu sem lobortis, rhoncus purus in, mattis augue. 
Sed eu libero at arcu dictum rhoncus. Vestibulum at tempus felis. Vestibulum mattis tincidunt eleifend."
      />

      <div className="wrapper-donut-chart">
        <DonutChart slice="1" value="18%" title="Percentual" />
        <DonutChart slice="2" value="12:00" title="Hora" />
        <DonutChart slice="3" value="R$350" title="Valor" />
      </div>
    </SectionCubo>

    <SectionCubo className="-work container">
      <TitleCubo content="Como funciona?" section />

      <ol class="wrapper">
        <li className="item">
          <FeatureCubo
            icon={World}
            altIcon="Ícone de um globo"
            title="Passo 1"
            description="Donec posuere, libero in tincidunt consectetur, velit diam lacinia magna, 
ut dignissim ligula est at erat."
          />
        </li>
        <li className="item">
          <FeatureCubo
            icon={Cart}
            altIcon="Ícone de um carrinho de compras"
            title="Passo 2"
            description="Donec posuere, libero in tincidunt consectetur, velit diam lacinia magna, 
ut dignissim ligula est at erat."
          />
        </li>
        <li className="item">
          <FeatureCubo
            icon={Like}
            altIcon="Ícone de um Like"
            title="Passo 3"
            description="Donec posuere, libero in tincidunt consectetur, velit diam lacinia magna, 
ut dignissim ligula est at erat."
          />
        </li>
        <li className="item">
          <FeatureCubo
            icon={Delivery}
            altIcon="Ícone de um entrega"
            title="Passo 4"
            description="Donec posuere, libero in tincidunt consectetur, velit diam lacinia magna, 
ut dignissim ligula est at erat."
            className="last"
          />
        </li>
      </ol>

      <ButtonCubo content="Leia mais" className="-second" />
    </SectionCubo>
  
    <SectionCubo className="-signup">
        <HeaderSection className="-light" title="Cadastre-se" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />

        <form>
          <InputCubo placeholder="Nome" className="-user"/>
          <InputCubo placeholder="Email" className="-email" />
          <InputCubo placeholder="Telefone" className="-phone" />

          <ButtonCubo type="submit" className="-light" content="Enviar" />
        </form>
    </SectionCubo> 
  </>
)
