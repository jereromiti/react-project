import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { getProductData } from "../../services/asyncMock";
import { useParams, Link } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function requestProduct() {
    const respuesta = await getProductData(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <main>
      <div class="card">
        <div class="card__title">
          <div class="icon">
            <Link to="/" href="#">
              <i class="fa fa-arrow-left"></i>
            </Link>
          </div>
          <h3>Producto nuevo</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>{product.title}</h1>
              <p class="sub">{product.model}</p>
              <p class="price">${product.price}</p>
            </div>
            <div class="image">
              <img src={product.img} alt="" />
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                voluptatem nam pariatur voluptate perferendis, asperiores
                aspernatur! Porro similique consequatur, nobis soluta minima,
                quasi laboriosam hic cupiditate perferendis esse numquam magni.
              </p>
            </div>
            <span class="stock">
              <i class="fa fa-pen"></i> En stock
            </span>
            <div class="reviews">
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
              <span>(64 Revisiones)</span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div id="action">
            <button type="button">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetailContainer;
