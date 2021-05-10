import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          tags
        }
      }
    }
  }
}
`

export default function Tags({data}) {
    let tagsArray = [];
        data.allMarkdownRemark.edges.forEach(({node}) => {
        if(node.frontmatter.tags.length > 1){
            node.frontmatter.tags.forEach(tag => tagsArray.push(tag))
        }else if( node.frontmatter.tags.length === 1 ){
            tagsArray.push(node.frontmatter.tags[0])
        }
    })
    return (
    <Layout>
        <h2>Tags</h2>
        {tagsArray.map(tag => (
            <div key={tag}><Link to={`/tag/${tag}`}>{tag}</Link></div>
        ))}
    </Layout>
    )
}