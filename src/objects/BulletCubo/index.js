import React from "react"
import "./styles.css"

const BulletCubo = ({
  href = "#",
  content = "",
  isActive = false,
  onClick,
}) => (
  <a
    onClick={onClick}
    href={href}
    className={`bullet-cubo ${isActive ? "-active" : ""}`}
  >
    {content}
  </a>
)

export default BulletCubo
