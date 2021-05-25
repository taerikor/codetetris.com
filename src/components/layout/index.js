import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm,scale } from "../../utils/typography"
import { Footer } from '../footer'


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
          <h4
          style={{
            marginTop: "5px"
          }}
          >
            by {" "}
            <Link
              style={{
                color: "#006acb",
                letterSpacing:` -1px`,
              }}
              to="/about"
            >
              {data.site.siteMetadata.author}
            </Link>
          </h4>
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
                fontSize: '25px',
                bottom:0,
                marginTop: '1px',
                letterSpacing: '-1px'
              }}
            >
              TAG
            </h3>
          </Link>
        </div>
      </div>
      {children}
      <Footer title={data.site.siteMetadata.title} />
    </div>
  )
}
