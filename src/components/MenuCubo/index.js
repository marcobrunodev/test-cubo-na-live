import React from "react"

import "./styles.css"
import ButtonCubo from "../ButtonCubo"

const MenuCubo = () => (
  <nav className="wrapper-menu-cubo">
    <ul className="menu-cubo">
      <li className="item">
        <ButtonCubo content="Home" />
      </li>
      <li className="item">Menu 1</li>
      <li className="item">Menu 2</li>
      <li className="item">Menu 3</li>
    </ul>
  </nav>
)

export default MenuCubo
