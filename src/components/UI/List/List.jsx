
function List({ list }) {
  return (
    <ul>
      {list.map((item) => (<li key={item.id}>
        {
            Object.values(item).map(value => <span>{value}</span>)
        }
      </li>
      ))}
    </ul>
  );
}

export default List;