import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase.js";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
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
  } else {
    return products.length === 0 ? (
      <p>No hay productos disponibles para esa consulta.</p>
    ) : (
      <ItemList products={products} />
    );
  }
}

export default ItemListContainer;
