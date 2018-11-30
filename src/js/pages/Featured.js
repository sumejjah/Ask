import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Integral",
      "Limes",
      "Tutorijal2 zadatak3 problem",
      "C++ bacanje izezetka",
      "Upute za IM2",
      "Upute za završni",
      "PHP imam problem",
      "Ajax",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
        <div class="row">{Articles}</div>
    );
  }
}
