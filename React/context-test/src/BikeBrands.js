import React from "react";

export default function BikeBrands(props) {
    const {brands} = props
  return (
    <div>
      <ul>
        {brands.map((b) => (
          <li>{b}</li>
        ))}
      </ul>
    </div>
  );
}
