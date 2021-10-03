import React from "react"
import { Link } from "gatsby"
import Tag from "../tag"

import "./index.css"
import PropTypes from "prop-types"

const Post = ({ slug, title, date, description, tags }) => {
  return (
    <div className="post">
      <Link to={slug}>
        <h2 className="title">{title}</h2>
      </Link>
      <p className="date">{date}</p>
      <div className="tags_box">
        {tags?.map(tag => (
          <Tag name={tag} />
        ))}
      </div>
      <span>{description}</span>
    </div>
  )
}

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
}

export default Post
