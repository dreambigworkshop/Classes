import React, { useContext } from "react";
import BrandContext from "./BrandContext";

export default function BikeBrands() {
  const {brands, models} = useContext(BrandContext);

  return (
    <div>
      <ul>
        {brands.map((b, key) => (
          <li key={key}>{b}</li>
        ))}
      </ul>
      <ul>
        {models.map((b, key) => (
          <li key={key}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
