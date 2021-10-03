import React from "react";
import News from "./News";
import Notice from "./Notice";

export default function NewsWrapper() {
  return (
    <section className="news-wrapper">
      <News />
      <Notice />
    </section>
  );
}
