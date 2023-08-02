import "./Item.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function Item(props) {
  const { id, title, img, price, model } = props;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div>
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img img-fluid" src={img} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{model}</span>
                  <span className="p-company">{title}</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <div className="view">
                <span className="price">$ {price}</span>
                <span className="view-product">
                  <Link to={`/product/${id}`}>
                    <ButtonComponent children="Ver Producto" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

