import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
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
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
            {data.site.siteMetadata.title}
        </h3>
      </Link>
      {children}
      <div 
        css={css`
        position: absolute;
        bottom: 0;
        padding-bottom: 20px;
        `}
      >
      ©{data.site.siteMetadata.title} All rights reserved
      </div>
    </div>
  )
}