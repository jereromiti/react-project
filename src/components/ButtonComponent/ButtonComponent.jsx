import "./ButtonComponent";

function ButtonComponent(props) {
  const { children } = props;

  return (
    <button className="btn">
      <span className="txt">{children}</span>
    </button>
  );
}

export default ButtonComponent;
