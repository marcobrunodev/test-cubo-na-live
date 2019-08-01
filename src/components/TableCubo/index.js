import React from 'react'

const TableCubo = ({ head, body }) => (
    <table className="table-cubo">
        <thead className="head">
            <tr>
                {head.map(th => <th>{th}</th>)}
            </tr>
        </thead>
        <tbody className="body">
            <tr>
                {body.map(td => <td>{td}</td>)}
            </tr>
        </tbody>
    </table>
);

export default TableCubo;