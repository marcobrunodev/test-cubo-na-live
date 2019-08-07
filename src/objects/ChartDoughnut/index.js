import React, { Fragment } from "react"
import "./styles.css"

import { Doughnut } from "react-chartjs-2"

const ChartDoughnut = ({ data }) => (
  <div className="doughnut">
    <Doughnut data={data} legend={false} />
  </div>
)

export default ChartDoughnut
