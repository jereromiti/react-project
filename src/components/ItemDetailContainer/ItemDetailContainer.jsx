import { useState, useEffect } from "react";
import { getProductData } from "../../services/firebase.js";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  return (
    <ItemDetail {...product}/>
  );
}

export default ItemDetailContainer;
