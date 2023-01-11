import { Link, useLocation } from "react-router-dom";

function LinkList({ list = [], properties = "" }) {
  const propertyList = properties.split(", ");
  const { pathname } = useLocation()

  return (
    <>
    {propertyList.map(property => <span key={property}>{property.charAt(0).toUpperCase() + property.slice(1)}</span>)}
      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <Link to={pathname + `/${item.id}`}>
                {propertyList.map((prop, index) => (
                  <span key={item.id + index}>{item[prop]}</span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default LinkList;
