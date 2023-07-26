import "./ButtonComponent";

function ButtonComponent(props) {
  /* { colorFondo: "red", label: "Boton"} */
  // destructuring
  const { children, colorFondo } = props;

  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <>
      <button style={styleButton} className="btn">
        <span className="txt">Ver Producto</span>
      </button>
    </>
  );
}

export default ButtonComponent;