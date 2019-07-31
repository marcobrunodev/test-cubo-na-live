import React from "react"

import "./styles.css"

const ButtonCubo = ({ content = '', className = '' }) => (
  <button className={`button-cubo ${className}`}>{content}</button>
)

export default ButtonCubo
