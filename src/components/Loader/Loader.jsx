import { DotSpinner } from "@uiball/loaders";

function Loader() {
  return (
    <span className="position-absolute top-50 start-50">
      <DotSpinner size={70} speed={0.9} color="black" />
    </span>
  );
}

export default Loader;
