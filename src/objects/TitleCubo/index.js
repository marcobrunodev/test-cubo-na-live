import React from "react"
import "./styles.css"

const TitleCubo = ({ content, section = "" }) => <h1 className={`title-cubo ${section && "-section"}`}>{content}</h1>

export default TitleCubo
