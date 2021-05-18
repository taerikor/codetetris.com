import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import _ from "lodash"
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
          marginBottom: "15px",
        }}
      >
        Tags
      </h2>
      {tagsArray.map(item => (
        <div
          key={item.tag}
          style={{
            marginBottom: "5px",
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
