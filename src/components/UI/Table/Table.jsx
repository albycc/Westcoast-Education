import { Link, useLocation } from "react-router-dom";

function Table({ list = [], headers="", properties = "" }) {
  const propertyList = properties.split(", ");
  const headersList = headers.split(', ')
  const { pathname } = useLocation();
  return (
    <table>
      <thead>
        <tr>
          {headersList.map((header) => (
            <th key={header }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((row) => (
          <tr key={row.id}>
            {propertyList.map((prop) => (
              <td>
                <Link to={pathname + `/${row.id}`}>{row[prop]}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
