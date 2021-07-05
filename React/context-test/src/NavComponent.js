import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BrandContext from "./BrandContext";

export default function NavComponent() {
  const {brands, models, greetings} = useContext(BrandContext)

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/brand">Brand</Link>
          </li>
          <li>
            <select>
              {brands.map((b, key) => (
                <option key={key}>{b}</option>
              ))}
            </select>
          </li>
          <li>
            <select>
              {models.map((b, key) => (
                <option key={key }>{b}</option>
              ))}
            </select>
          </li>
          <li>{greetings}</li>
        </ul>
      </nav>
    </div>
  );
}
