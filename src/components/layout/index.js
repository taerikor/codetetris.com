import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../../utils/typography"

import "./index.css"

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
            <h1
              className="metatitle"
              css={css`
                margin: 0;
              `}
            >
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <span>
            by{" "}
            <Link
              style={{
                color: "#ff7961",
              }}
              to="/about"
            >
              {data.site.siteMetadata.author}
            </Link>{" "}
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
          <Link
            style={{
              all: "unset",
              cursor: "pointer",
            }}
            to={`/tags`}
          >
            <h4
              style={{
                fontSize: "20px",
                margin: 0,
              }}
            >
              TAG
            </h4>
          </Link>
        </div>
      </div>
      {children}
      <div
        css={css`
          position: relative;
          bottom: 0;
          padding-top: 100px;
          font-size: 13px;
          width: 100%;
          text-align: center;
          color: #6666;
        `}
      >
        ©{data.site.siteMetadata.title} All rights reserved
      </div>
    </div>
  )
}
