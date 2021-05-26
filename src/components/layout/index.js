import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../../utils/typography"
import { Footer } from '../footer'

import './index.css'


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
          <span
          className='author_header'
          style={{
            marginTop: "5px",
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
          </span>
        </div>
        <div
          style={{
            float: `right`,
          }}
        >
          <Link
            to={`/tags`}
            className='tag_header'
          >
            <span>
              TAG
            </span>
          </Link>
        </div>
      </div>
      {children}
      <Footer title={data.site.siteMetadata.title} />
    </div>
  )
}
