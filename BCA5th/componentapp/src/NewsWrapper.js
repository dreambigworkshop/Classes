import React from "react";
import News from "./News";
import Notice from "./Notice";

export default function NewsWrapper() {
  let date = new Date();
  let titleDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return (
    <section className="news-wrapper">
      <News title={'News from: ' + titleDate} />
      <Notice title={"Notices"}/>
    </section>
  );
}
