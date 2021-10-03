import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { Footer } from "../footer"
import { Header } from "../header"

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
    <>
      <Header />
      <div className="layout_content">
        <div className="title_container">
          <Link to={`/`}>
            <h1 className="layout_title">{data.site.siteMetadata.title}</h1>
          </Link>
          <span className="author_header">
            by{" "}
            <Link className="author_name_link" to="/about">
              {data.site.siteMetadata.author}
            </Link>
          </span>
        </div>
        {children}
      </div>
      <Footer title={data.site.siteMetadata.title} />
    </>
  )
}
