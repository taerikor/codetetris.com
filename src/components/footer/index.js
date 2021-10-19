import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import * as footerStyles from "./footer.module.css"

export const Footer = ({ title }) => {
  return (
    <div className={footerStyles.footer}>
      <Link to="/">{title}</Link>
      <div>
        <Link to="/rss.xml">RSS</Link>{" "}
        <a
          href="https://github.com/taerikor/codetetris.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
      </div>
    </div>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}
