import { useState, useCallback } from "react";

const Card = ({ imgPath }) => {
  const [show, toggleShow] = useState(false);

  const onClick = useCallback(() => {
    toggleShow(!show);
  }, [show]);

  return (
    <div
      className="relative rounded-sm border-2 h-full w-full border-amber-950 overflow-hidden"
      onClick={onClick}
    >
      <img
        src={imgPath || "src/assets/react.svg"}
        className={`h-full w-full object-contain absolute top-0 left-0 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`w-full h-full bg-amber-200 absolute top-0 left-0 transition-opacity duration-300 flex items-center justify-center ${
          show ? "opacity-0" : "opacity-100"
        }`}
      ></div>
    </div>
  );
};

export default Card;
