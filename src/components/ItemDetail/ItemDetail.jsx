import "./ItemDetail.css"
import { Link } from "react-router-dom";


function ItemDetail(props) {
  const { title, img, price, model, stock, description } = props;

    return(
        <main>
      <div class="card py-1">
        <div class="card__title">
          <Link to="/" class="icon">
            <span>
              <i class="fa fa-arrow-left"></i>
            </span>
          </Link>
          <h3>Producto nuevo</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>{title}</h1>
              <p class="sub">{model}</p>
              <p class="price">$ {price}</p>
            </div>
            <div class="image">
              <img src={img} alt="" />
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>{description}</p>
            </div>
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
              <span>(64 Reviews)</span>
            </div>
            <span class="stock">
              <i class="fa fa-pen"></i> En stock ({stock})
            </span>
          </div>
        </div>
        <div className="card__footer">
          <div id="action">
            <button type="button">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </main>
    )
};

export default ItemDetail;