import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
  const { products } = props;

  return (
    <div className="main__productos container">
      <h1 className="main_title text-center my-5">Productos</h1>
      <div className="gale__grid row gx-5 gy-4 mb-5 w-auto">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
