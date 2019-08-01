import React from "react"
import "./styles.css"

const DonutChart = ({ slice = 0, value, title }) => {
  const slices = ["", "-one-quarter", "-half", "-three-quarter", "-full"]

  return (
    <dl className="donut-chart">
      <dd className={`value ${slices[slice]}`}>
        <span className="content">{value}</span>
      </dd>
      <dt className="title">{title}</dt>
    </dl>
  )
}

export default DonutChart
