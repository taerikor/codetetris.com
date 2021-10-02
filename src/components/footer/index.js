import React from "react"
import PropTypes from "prop-types"

import "./index.css"
import { Link } from "gatsby"

export const Footer = ({ title }) => {
  return (
    <div className="footer_container">
      ©<Link to="/rss.xml">{title}</Link> All rights reserved
    </div>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}
