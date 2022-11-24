import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <ul className="d-flex flex-row justify-content-around flex-wrap">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

export default ItemList;