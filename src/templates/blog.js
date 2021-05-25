import React from "react"
import { graphql } from "gatsby"
import { rhythm } from '../utils/typography'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tag from "../components/tag"
import Utterances from '../components/utterances'

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1
          style={{
            marginBottom: rhythm(0.5),
            color: "black",
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            color: `#bbb`,
            fontSize: `15px`,
            marginBottom: rhythm(0.5),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.tags.map(tag => (
            <Tag name={tag} />
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3>Comments</h3>
        <Utterances repo="taerikor/blog-comments" theme="github-light" />
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
