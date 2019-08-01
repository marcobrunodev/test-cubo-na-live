import React from "react"

import "./styles.css"

const ButtonCubo = ({ content = '', className = '', type = "" }) => (
  <button className={`button-cubo ${className}`} type={type}>{content}</button>
)

export default ButtonCubo
