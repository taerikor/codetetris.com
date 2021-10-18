import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.css"

export const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Link to={`/tags`} className={headerStyles.tag}>
        TAG
      </Link>
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          if (theme == null) {
            return null
          }
          return (
            <span
              className={headerStyles.themeSwitch}
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
