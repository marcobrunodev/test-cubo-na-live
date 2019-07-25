import React from "react"
import "./styles.css"

const DonutChart = ({ value, title }) => (
  <dl className="donut-chart">
    <dd className="value"><span className="content">{value}</span></dd>
    <dt className="title">{title}</dt>
  </dl>
)

export default DonutChart
