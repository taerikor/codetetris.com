import React from "react"
import { Link,graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Profile from '../components/profile'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <Profile author={data.site.siteMetadata.author} />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}
              css={css`
              margin-top: 30px;
            `}>
                        <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <p
                css={css`
                  margin-top:10px;
                  color: #bbb;
                  font-size:15px;
                `}
              >
              {node.frontmatter.date}
              </p>
            </h3>
            <p>{node.frontmatter.description}</p>
            </Link>
          </div>
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