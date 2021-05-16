import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from '../components/post'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
        excerpt
      }
    }
  }
  site{
		siteMetadata
    {
    author
    }
  }
}

`