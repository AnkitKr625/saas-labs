import "./Table.css";

const Table = ({ tableRows, tableColumns }) => {
  return (
    <table className="projects-table">
      <thead className="table-header">
        <tr>
          {tableColumns.map(({ name, key }) => {
            return <th className="table-cell" key={key}>{name}</th>;
          })}
        </tr>
      </thead>
      <tbody className="table-body">
        {tableRows.map((row) => (
          <tr className="table-row" key={row["s.no"]}>
            {tableColumns.map(({ key, customElement }) => {
              return (
                <td className="table-cell" key={key}>
                  {customElement ? customElement(row, key) : row[key]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
