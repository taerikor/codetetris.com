import React from "react"
import { Link } from "gatsby"
import Tag from "../tag"
import { rhythm } from "../../utils/typography"

import './index.css'
import  PropTypes  from 'prop-types'

const Post = ({ slug, title, date, description, tags }) => {
  return (
    <div
    style={{
      marginBottom:rhythm(2)
    }}
    >
      <Link to={slug}>
        <h2
          className='title'
          style={{
            marginBottom: rhythm(1 / 8),
          }}
        >
          {title}
        </h2>
      </Link>
      <p
        style={{
          color: `#666`,
          fontSize: `13px`,
          marginBottom: rhythm(1 / 4),
        }}
      >
        {date}
      </p>
      <div
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
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
