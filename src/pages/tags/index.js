import React from "react"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { rhythm } from '../../utils/typography'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

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
            to={`/tag/${kebabCase(item.tag)}/`}
          >{`${item.tag} (${item.totalCount})`}</Link>
        </div>
      ))}
    </Layout>
  )
}
