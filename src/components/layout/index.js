import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm,scale } from "../../utils/typography"


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
        maxWidth: '700px',
        padding: rhythm(1),
        paddingTop: rhythm(1.5),
      }}
    >
      <div
        style={{
          marginBottom: rhythm(2),
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
                fontSize: '35px',
                letterSpacing:` -4px`,
                wordSpacing:`10px`,
                color: '#263959',
              }}
            >
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <span>
            by{" "}
            <Link
              style={{
                color: "#006acb",
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
          }}
        >
          <Link
            to={`/tags`}
          >
            <h3
              style={{
                fontSize: scale(2),
                margin: 0,
                letterSpacing: '-1px'
              }}
            >
              TAG
            </h3>
          </Link>
        </div>
      </div>
      {children}
      <div
        style={{
          position: `relative`,
          bottom: 0,
          paddingTop: rhythm(5),
          fontSize: scale(0),
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
