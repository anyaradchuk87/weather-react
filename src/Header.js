import React from "react";
import Search from "./SearchEngine";

import "./Header.css";

export default function Header() {
  return (
    <div className="weather">
      <Search defaultCity="Kyiv" />
    </div>
  );
}
