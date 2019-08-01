import React from "react"

import "./styles.css"

export const ButtonCubo = ({ content = "", className = "", type = "" }) => (
  <button className={`button-cubo ${className}`} type={type}>
    {content}
  </button>
)
