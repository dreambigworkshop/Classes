import React from "react";
import Image from "./Image";
import NewsItem from "./NewsItem";

export default function Banner() {
  return (
    <div>
      <div className="banner">
      <NewsItem news="Important Update" order={'*'}/>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
      </div>
    </div>
  );
}
