import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        Created by
        <a href="https://dasburo.tech" target="_blank" rel="noreferrer">
          dasBüro
        </a>
        <br /> {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default CopyRight;
