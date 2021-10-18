import React from "react"
import { Link } from "gatsby"
import Tag from "../tag"

import * as postStyles from "./post.module.css"

import PropTypes from "prop-types"

const Post = ({ slug, title, date, description, tags }) => {
  return (
    <>
      <Link to={slug}>
        <h2 className={postStyles.title}>{title}</h2>
      </Link>
      <p className={postStyles.date}>{date}</p>
      <div className={postStyles.tags}>
        {tags?.map(tag => (
          <Tag name={tag} />
        ))}
      </div>
      <span>{description}</span>
    </>
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
