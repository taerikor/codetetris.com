import React from "react"
import { Link } from "gatsby"
import Tag from "../tag"
import { rhythm } from "../../utils/typography"

const Post = ({ slug, title, date, description, tags }) => {
  return (
    <div
    style={{
      marginBottom:rhythm(2)
    }}
    >
      <Link to={slug}>
        <h3
          style={{
            marginBottom: rhythm(1 / 8),
            fontSize: `30px`,
            color: `#2797ff
            `,
          }}
        >
          {title}
        </h3>
      </Link>
      <p
        style={{
          color: `#bbb`,
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
        {tags.map(tag => (
          <Tag name={tag} />
        ))}
      </div>
      <span>{description}</span>
    </div>
  )
}

export default Post
