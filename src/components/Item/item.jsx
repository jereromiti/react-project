import "./item.css";

function Item(props) {
  return (
    <div class="container page-wrapper">
      <div class="page-inner">
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <img
                class="img"
                src="../assets/img/pro-x-superlight-black-gallery-6.webp"
                alt=""
              />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">Superlight Pro X</span>
                  <span class="p-company">Logitech</span>
                </div>
                {/* <div class="a-size">
                  Available sizes : <span class="size">S , M , L , XL</span>
                </div> */}
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <a class="cart" href="#">
                <span class="price">$200</span>
                <span class="add-to-cart">
                  <span class="txt">Añadir al carrito</span>
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
