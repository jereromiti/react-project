import React from "react";
import Item from "../Item/item";

function ItemListContainer( { greeting } ) {

  // const username = "name";

  return (
    <div>
      <Item/>
      <Item/>
      <Item/>
    </div>
  );
}

export default ItemListContainer;
