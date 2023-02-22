import Item from "../Item/Item";

const List = ({ frutas }) => {
  return (
    <ul>
      <Item fruta={frutas[0]} />
      <Item fruta={frutas[1]} />
      <Item fruta={frutas[2]} />
      <Item fruta={frutas[3]} />
    </ul>
  );
};

export default List;