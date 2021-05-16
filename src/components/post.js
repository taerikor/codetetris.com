import React from 'react'
import { css } from "@emotion/react"
import { Link } from "gatsby"
import Tag from './tag'
import { rhythm } from "../utils/typography"

const Post = ({slug,title,date,description,tags}) => {
    return (
        <div
        css={css`
        margin-top: 30px;
      `}>
                  <Link
        to={slug}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {title}
        </h3>
        <p
          css={css`
          color: #bbb;
          font-size:15px;
          margin-bottom:10px;
          `}
        >
        {date}
        </p>
          <div
                css={
                  css`
                  margin-bottom:10px;
                  `
                }
                >
                  {tags.map(tag => <Tag name={tag} />)}
                </div>
      <span>{description}</span>
      </Link>
    </div>
    )
    }

export default Post;