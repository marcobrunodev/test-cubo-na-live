import React from "react"
import "./styles.css"

const ServiceCubo = ({ src, alt, title, description }) => (
  <dl className="service-cubo">
    <dd className="icon">
      <img src={src} alt={alt} />
    </dd>
    <dt className="title">{title}</dt>
    <dd className="description">{description}</dd>
  </dl>
)

export default ServiceCubo
