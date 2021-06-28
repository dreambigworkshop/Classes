import React from "react";
import { Link } from "react-router-dom";

export default function NavComponent(props) {
  const { brands } = props;
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
              {brands.map((b) => (
                <option>{b}</option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
}
