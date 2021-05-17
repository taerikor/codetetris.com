import React from "react"
import _ from "lodash"
import { Link } from "gatsby"

import "./index.css"

const Tag = ({ name }) => {
  return (
    <div className='tag_container'>
      <Link
        to={`/tag/${_.kebabCase(name)}/`}
      >
        {name}
      </Link>
    </div>
  )
}

export default Tag
