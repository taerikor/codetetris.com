import React from "react"
import { Link,graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Profile from '../components/profile'
import _ from 'lodash'

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
            <div>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}
              </h3>
              <ul>
                {node.frontmatter.tags.map(tag => <li><Link to={`/tag/${_.kebabCase(tag)}/`}>{tag}</Link></li>)}
              </ul>
            </div>
              <p
                css={css`
                  color: #bbb;
                  font-size:15px;
                `}
              >
              {node.frontmatter.date}
              </p>
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