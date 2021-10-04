import React from "react";

export default function Notice(props) {
  let {title} = props
  return (
    <div className="notice">
      <h1>{title}</h1>
      <ul>
        <li>Notice 1</li>
        <li>Notice 1</li>
        <li>Notice 1</li>
        <li>Notice 1</li>
      </ul>
    </div>
  );
}
