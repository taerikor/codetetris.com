import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { css } from "@emotion/react"
import _ from 'lodash'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p
                css={css`
                  margin-top:10px;
                  color: #bbb;
                  font-size:15px;
                `}
              >
              {post.frontmatter.date}
              </p>
              <ul>
                {post.frontmatter.tags.map(tag => <li><Link to={`/tag/${_.kebabCase(tag)}/`}>{tag}</Link></li>)}
              </ul>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      excerpt
    }
  }
`