import React from "react"
import "./styles.css"

const TableCubo = ({ head, body }) => (
  <table className="table-cubo">
    <thead className="head">
      <tr>
        {head.map(th => (
          <th className="data">{th}</th>
        ))}
      </tr>
    </thead>
    <tbody className="body">
      {body.map(({ id, name, lastName, participation }) => (
        <tr>
          <td className="data -id">{id}</td>
          <td className="data">{name}</td>
          <td className="data">{lastName}</td>
          <td className="data">{participation}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default TableCubo
