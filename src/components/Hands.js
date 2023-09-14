import React from "react";

export default function Hands({ setUserSelection }) {
  function handleClick(e) {
    const userHandPick = e.target.getAttribute("data-value");
    console.log(userHandPick);

    setUserSelection(userHandPick);
  }

  return (
    <div className="hands">
      <img
        onClick={handleClick}
        src="https://img.freepik.com/vector-premium/icono-tijeras-corte-concepto-tijeras-abiertas_74669-470.jpg?w=2000"
        alt=""
        data-value="scissors"
      />
      <img
        onClick={handleClick}
        src="https://elcomercio.pe/resizer/0NTL2WSmZaVDgXKBWHXTTHZPF34=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/T2CUKPVKLBG6DJJLJ7K3UQ2XFA.jpg"
        alt=""
        data-value="rock"
      />
      <img
        onClick={handleClick}
        src="https://graficaigc.com.ar/wp-content/uploads/2022/04/opalinaobra-1.jpg"
        alt=""
        data-value="paper"
      />
    </div>
  );
}
