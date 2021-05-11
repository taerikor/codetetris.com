import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import _ from 'lodash'

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

export default function Tags({data}) {
  const tagsArray = data.allMarkdownRemark.group
    return (
    <Layout>
        <h2>Tags</h2>
        {tagsArray.map(item => (
            <div key={item.tag}><Link to={`/tag/${_.kebabCase(item.tag)}/`}>{`${item.tag} (${item.totalCount})`}</Link></div>
        ))}
    </Layout>
    )
}