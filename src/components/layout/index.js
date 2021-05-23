import React from "react"
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
      style={{
        margin: "0 auto",
        maxWidth: "700px",
        padding: `${rhythm(1)}`,
        paddingTop: `${rhythm(1.5)}`,
      }}
    >
      <div
        style={{
          marginBottom: `50px`,
        }}
      >
        <div
          style={{
            display: 'inline-block',
          }}
        >
          <Link to={`/`}>
            <h1
              style={{
                margin: 0,
                fontSize: `40px`,
              }}
            >
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <span>
            by{" "}
            <Link
              style={{
                color: "#253ab4e1",
              }}
              to="/about"
            >
              {data.site.siteMetadata.author}
            </Link>{" "}
          </span>
        </div>
        <div
          style={{
            float: `right`,
            height: `56px`,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Link
            style={{
              all: "unset",
              cursor: "pointer",
            }}
            to={`/tags`}
          >
            <span
              style={{
                fontSize: "20px",
                margin: 0,
              }}
            >
              TAG
            </span>
          </Link>
        </div>
      </div>
      {children}
      <div
        style={{
          position: `relative`,
          bottom: 0,
          paddingTop: `100px`,
          fontSize: `13px`,
          width: `100%`,
          textAlign: `center`,
          color: `#6666`,
        }}
      >
        ©{data.site.siteMetadata.title} All rights reserved
      </div>
    </div>
  )
}
