import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by{" "}
        <a
          href="https://www.instagram.com/anyavovk87/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anna Radchuk
        </a>{" "}
        it is{" "}
        <a
          href="https://github.com/anyaradchuk87/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/anyaradchuk87/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </footer>
  );
}
