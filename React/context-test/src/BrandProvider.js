import React from "react";
import BrandContext from "./BrandContext";

export default function BrandProvider(props) {
  const brands = ["Bazaz", "Yamaha", "Royal Enfield", "Honda", "BMW"];
  const models = ["Pulsur 200", "Yamaha FZ", "Discover", "Bullet 500"];

  const data = {
      brands: brands,
      models: models,
      greetings: "Hello From Morang"
  }
  return (
    <BrandContext.Provider  value={data}>
      {props.children}
    </BrandContext.Provider>
  );
}
