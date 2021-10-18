import React from "react"
import PropTypes from "prop-types"

import "./index.css"
import { Link } from "gatsby"

export const Footer = ({ title }) => {
  return (
    <div className="footer_container">
      <Link to="/">{title}</Link>
      <div>
        <Link to="/rss.xml">RSS</Link>{" "}
        <Link to="https://github.com/taerikor/codetetris.com">GITHUB</Link>
      </div>
    </div>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}
