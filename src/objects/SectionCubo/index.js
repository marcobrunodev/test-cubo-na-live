import React from "react"
import "./styles.css"

const SectionCubo = ({ children = "", className = "" }) => (
  <section className={`section-cubo ${className}`}>{children}</section>
)

export default SectionCubo
