import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase.js";

import Item from "../Item/item";
import "./ItemListContainer.css";
import "../Loader/Loader";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function requestProducts() {
      let respuesta = categoryId
        ? await getCategoryData(categoryId)
        : await getData();
      setProducts(respuesta);
      setIsLoading(false);
    }

    requestProducts();
  }, [categoryId]);

  if (isLoading) {
    return <Loader />;
  }

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

export default ItemListContainer;
