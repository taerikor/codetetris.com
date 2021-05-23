import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import _ from "lodash"
import SEO from "../../components/seo"
import { rhythm } from '../../utils/typography'

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

export default function Tags({ data }) {
  const tagsArray = data.allMarkdownRemark.group
  return (
    <Layout>
      <SEO title={`Tags`} />
      <h2
        style={{
          marginBottom: rhythm(1.5),
        }}
      >
        Tags
      </h2>
      {tagsArray.map(item => (
        <div
          key={item.tag}
          style={{
            marginBottom: rhythm(0.2),
          }}
        >
          <Link
            to={`/tag/${_.kebabCase(item.tag)}/`}
          >{`${item.tag} (${item.totalCount})`}</Link>
        </div>
      ))}
    </Layout>
  )
}
