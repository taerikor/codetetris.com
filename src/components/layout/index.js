import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div
        css={css`
          margin-bottom: 50px;
        `}
      >
        <div
          css={css`
            display: inline-block;
          `}
        >
          <Link to={`/`}>
            <h2
              css={css`
                font-style: normal;
                margin: 0;
              `}
            >
              {data.site.siteMetadata.title}
            </h2>
          </Link>
          <span>
            by <Link to="/about">{data.site.siteMetadata.author}</Link>{" "}
          </span>
        </div>
        <div
          css={css`
            float: right;
            height: 56px;
            display: flex;
            align-items: center;
          `}
        >
          <Link to={`/tags`}>TAG</Link>
        </div>
      </div>
      {children}
      <div
        css={css`
          position: relative;
          bottom: 0;
          padding-top: 40px;
          font-size: 13px;
          width: 100%;
          text-align: center;
        `}
      >
        ©{data.site.siteMetadata.title} All rights reserved
      </div>
    </div>
  )
}
