import React from "react"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import * as tagStyles from "./tag.module.css"

import PropTypes from "prop-types"

const Tag = ({ name }) => {
  return (
    <Link className={tagStyles.link} to={`/tag/${kebabCase(name)}/`}>
      <div className={tagStyles.container}>{name}</div>
    </Link>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Tag
