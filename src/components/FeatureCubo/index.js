import React from "react"
import "./styles.css"
import World from "../../images/world.png"

const FeatureCubo = () => (
  <dl className="feature-cubo">
    <dd className="icon">
      <img src={World} alt="Ícone do mundo" />
    </dd>
    <dt className="title">Passo 1</dt>
    <dd className="description">
      Donec posuere, libero in tincidunt consectetur, velit diam lacinia magna,
      ut dignissim ligula est at erat.
    </dd>
  </dl>
)

export default FeatureCubo
