import React, { useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/post"
import Seo from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title={`Home`} />
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
          />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
