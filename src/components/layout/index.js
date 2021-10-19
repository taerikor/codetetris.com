import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { Footer } from "../footer"
import { Header } from "../header"

import * as layoutStyles from "./layout.module.css"

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
      <div className={layoutStyles.content}>
        <div className={layoutStyles.title}>
          <Link className={layoutStyles.title__link} to={`/`}>
            <h1 className={layoutStyles.title__text}>
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <span className={layoutStyles.title__author}>
            by{" "}
            <Link className={layoutStyles.author__name} to="/about">
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
