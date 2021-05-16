import React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from 'gatsby'
import { css } from "@emotion/react"

export default function About({ data }) {
  return (
    <Layout>
      <div css={css`
      display:flex;
      justify-content: center;
      margin-bottom: 50px;
      `}>
      <span
      css={css`
      font-size: 70px;
      `}
      >"Main Topic"</span>
      </div>
      <div css={css`
      display: flex;
      justify-content: space-between;
      `}>
        <div
        css={css`
        height: 300px;
        width: 300px;
        background-color: black;
        color:white;
        `}
        >Pic</div>
        <div
        css={css`
        height: 300px;
        width: 300px;
        padding-left: 20px
        `}
        ><h3>Taeri Kim</h3>
        <span>주절주절...</span>
        </div>
      </div>
      <div css={css`
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      `}
      >
        <Link to='#'>Contact</Link>
        <Link to='https://github.com/taerikor'>Git Hub</Link>
        <Link to='#'>Resume</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`