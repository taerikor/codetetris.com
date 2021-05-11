import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
// Components
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `"${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <h5>{`${totalCount}개의 게시물`}</h5>
        {edges.map(({ node }) => {
          return (
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
          )
        })}
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              data: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
           date(formatString: "MMMM DD, YYYY")
           description
          }
        }
      }
    }
  }
`