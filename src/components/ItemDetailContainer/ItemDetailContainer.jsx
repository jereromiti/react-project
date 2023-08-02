import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { getProductData } from "../../services/firebase.js";
import { useParams, Link } from "react-router-dom";
import ButtonAddCart from "../ButtonAddCart/ButtonAddCart";

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
    <main>
      <div className="card py-1">
        <div className="card__title">
          <Link to="/" className="icon">
            <span>
              <i className="fa fa-arrow-left"></i>
            </span>
          </Link>
          <h3>Producto nuevo</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{product.title}</h1>
              <p className="sub">{product.model}</p>
              <p className="price">$ {product.price}</p>
            </div>
            <div className="image">
              <img src={product.img} alt="" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p>{product.description}</p>
            </div>
            <div className="reviews">
              <ul class="stars">
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star-o"></i>
                </li>
              </ul>
              <span>(64 Reviews)</span>
            </div>
            <span className="stock">
              <i className="fa fa-pen"></i> {product.stock > 0 ? 
              (product.stock) + " En stock" : 
              ("No hay stock")}
            </span>
          </div>
        </div>
        <div className="card__footer">
            <ButtonAddCart />
        </div>
      </div>
    </main>
  );
}

export default ItemDetailContainer;
