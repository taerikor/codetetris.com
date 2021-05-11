import React from "react"
import Layout from "../../components/layout"
import { graphql } from 'gatsby'

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.author}</h1>
      <p>
          뚝딱뚝딱
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`