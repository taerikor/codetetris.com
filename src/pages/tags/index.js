import React from "react"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

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
      <div className="tags_container">
        <h2>Tags</h2>
        {tagsArray.map(item => (
          <div className="tags" key={item.tag}>
            <Link
              to={`/tag/${kebabCase(item.tag)}/`}
            >{`${item.tag} (${item.totalCount})`}</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
