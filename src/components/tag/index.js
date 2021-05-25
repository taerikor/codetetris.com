import React from "react"
import _ from "lodash"
import { Link } from "gatsby"

import "./index.css"

const Tag = ({ name }) => {
  return (
      <Link
      className="tag_link"
      to={`/tag/${_.kebabCase(name)}/`}>
         <div className="tag_container">
        {name}
         </div>
      </Link>
  )
}

export default Tag
