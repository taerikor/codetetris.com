import React from "react"
import { kebabCase } from "lodash"
import { Link } from "gatsby"

import PropTypes from 'prop-types'

import "./index.css"

const Tag = ({ name }) => {
  return (
      <Link
      className="tag_link"
      to={`/tag/${kebabCase(name)}/`}>
         <div className="tag_container">
        {name}
         </div>
      </Link>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Tag
