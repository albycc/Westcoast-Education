import { Link, useLocation } from "react-router-dom";
import style from "./Table.module.scss";

function Table({ list = [], headers = "", properties = "" }) {
  const propertyList = properties.split(", ");
  const headersList = headers.split(", ");
  const { pathname } = useLocation();
  return (
    <div className={style['table-container']}>
      <table className={style.table}>
        <thead>
          <tr>
            {headersList.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((row) => (
            <tr key={row.id}>
              {propertyList.map((prop, index) => (
                <td key={row.id + "-" + index}>
                  <Link to={pathname + `/${row.id}`}>{row[prop]}</Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
