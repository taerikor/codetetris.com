import React, { useState } from "react"
import { Link } from "gatsby"

import "./index.css"
import "../../utils/theme.css"

export const Header = () => {
  const [isDark, setIsDark] = useState(false)

  const onThemeClick = () => {
    const THEME_DARK = "dark"
    if (isDark === false) {
      document.body.classList.add(THEME_DARK)
      setIsDark(true)
    } else {
      document.body.classList.remove(THEME_DARK)
      setIsDark(false)
    }
  }

  return (
    <div className="header">
      <Link to={`/tags`} className="tag_header">
        <span>TAG</span>
      </Link>
      {/* <span onClick={onThemeClick} className="theme_switch">
        {isDark ? "DARK" : "LIGHT"}
      </span> */}
    </div>
  )
}
