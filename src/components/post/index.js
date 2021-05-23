import React from "react"
import { Link } from "gatsby"
import Tag from "../tag"
import { rhythm } from "../../utils/typography"

const Post = ({ slug, title, date, description, tags }) => {
  return (
    <div>
      <Link to={slug}>
        <h3
          style={{
            marginBottom: `${rhythm(1 / 8)}`,
            fontSize: `30px`,
            color: `#0366d6`,
          }}
        >
          {title}
        </h3>
      </Link>
      <p
        style={{
          color: `#bbb`,
          fontSize: `13px`,
          marginBottom: `5px`,
        }}
      >
        {date}
      </p>
      <div
        style={{
          marginBottom: `10px`,
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
