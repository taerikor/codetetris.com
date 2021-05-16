import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { css } from "@emotion/react"
import Tag from '../components/tag'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p
                css={css`
                  color: #bbb;
                  font-size:15px;
                `}
              >
              {post.frontmatter.date}
              </p>
              <div
              css={
                css`
                display: flex;
                margin-bottom: 30px;
                `
              }
              >
                {post.frontmatter.tags.map(tag => <Tag name={tag} />)}
              </div>
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