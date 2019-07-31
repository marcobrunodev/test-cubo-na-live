import React from "react"
import "./styles.css"

const FeatureCubo = ({ icon, altIcon, title, description, className }) => (
  <dl className="feature-cubo">
    <dd className="icon">
      <img src={icon} alt={altIcon} />
    </dd>
    <dt className="title">{title}</dt>
    <dd className="description">{description}</dd>
  </dl>
)

export default FeatureCubo
