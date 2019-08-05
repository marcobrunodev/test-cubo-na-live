import React from 'react'

const TableCubo = ({ head, body }) => (
    <table className="table-cubo">
        <thead className="head">
            <tr>
                {head.map(th => <th>{th}</th>)}
            </tr>
        </thead>
        <tbody className="body">
            {body.map(({ id, name, lastName, participation }) => (
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{lastName}</td>
                    <td>{participation}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TableCubo;