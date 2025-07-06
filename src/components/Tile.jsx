import { useState, useCallback } from "react";

const Tile = ({ image }) => {
  const [show, toggleShow] = useState(false);

  const onClick = useCallback(() => {
    toggleShow(!show);
  }, [show]);

  return (
    <div
      className="relative rounded-sm border-2 h-full w-full border-amber-900 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image || "src/assets/butterscotch.png"}
        className={`h-full w-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`w-full h-full bg-blue-400 absolute top-0 left-0 transition-opacity duration-300 flex items-center justify-center ${
          show ? "opacity-0" : "opacity-100"
        }`}
      >
      </div>
    </div>
  );
};

export default Tile