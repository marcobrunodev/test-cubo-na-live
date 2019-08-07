import React from "react"
import "./styles.css"

import { Doughnut } from "react-chartjs-2"

const ChartDoughnut = ({ data }) => (
  <div className="doughnut">
    <div className="chart">
      <Doughnut data={data} legend={false} />
    </div>

    <ol>
      {data.labels.map((label, index) => (
        <li
          className="item"
          data-color={data.datasets[0].backgroundColor[index]}
          style={{
            color: data.datasets[0].backgroundColor[index],
          }}
        >
          <span
            className="color"
            style={{
              backgroundColor: data.datasets[0].backgroundColor[index],
            }}
          ></span>
          {label}
        </li>
      ))}
    </ol>
  </div>
)

export default ChartDoughnut
