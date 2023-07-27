import "./item.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function Item(props) {
  const { id, title, img, price, model } = props;

  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div>
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <img class="img" src={img} alt="" />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">{model}</span>
                  <span class="p-company">{title}</span>
                </div>
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <a class="cart" href="#">
                <span class="price">${price}</span>
                <span class="add-to-cart">
                  <Link to={`/product/${id}`}>
                    <ButtonComponent children="Ver Producto" />
                  </Link>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
