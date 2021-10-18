import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Link } from "gatsby"

import "./index.css"

export const Header = () => {
  return (
    <div className="header">
      <Link to={`/tags`} className="tag_header">
        <span>TAG</span>
      </Link>
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          if (theme == null) {
            return null
          }
          return (
            <span
              onClick={() =>
                theme === "light" ? toggleTheme("dark") : toggleTheme("light")
              }
            >
              {theme === "light" ? "DARK" : "LIGHT"}
            </span>
          )
        }}
      </ThemeToggler>
    </div>
  )
}
