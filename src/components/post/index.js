import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import Tag from "../tag"
import { rhythm } from "../../utils/typography"

const Post = ({ slug, title, date, description, tags }) => {
  return (
    <div>
      <Link to={slug}>
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 8)};
            font-size: 30px;
          `}
        >
          {title}
        </h3>
      </Link>
      <p
        css={css`
          color: #bbb;
          font-size: 15px;
          margin-bottom: 5px;
        `}
      >
        {date}
      </p>
      <div
        css={css`
          margin-bottom: 10px;
        `}
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
