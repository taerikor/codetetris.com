import React from "react"
import Layout from "../../components/layout"

import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"

import * as aboutStyles from "./about.module.css"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title={`About`} />
      <div className={aboutStyles.topic}>
        <span className={aboutStyles.topic__text}>
          어제 읽은 그 책 정말 이해했을까요?
        </span>
      </div>
      <div className={aboutStyles.bio}>
        <GatsbyImage
          style={{
            width: "300px",
          }}
          image={data.file.childImageSharp.gatsbyImageData}
          placeholder="blurred"
          alt={"taeri"}
        />
        <div className={aboutStyles.meta}>
          <span className={aboutStyles.meta__content}>
            배움은 단 한 번도 쉬운 적이 없고 눈을 뜨면 또 새로운 것이 생깁니다.
            너무도 빠른 변화 속에서 지금까지 이해한 것처럼 지나가버린 것들에
            대하여 의심이 가기 시작합니다. 내가 누군가를 위해 설명할 수
            있을까요? 단지 그것이 이 블로그를 만든 이유입니다. 수많은 정보와
            기술들은 제각각인 듯 존재하지만 하나의 덩어리처럼 서로에게 연관되어
            있다고 생각합니다. 테트리스 하듯 쌓아가다 보니 빈틈이 많습니다.
            부족한 모습을 보이더라도 공유하며 채워나가고 글을 쓰며 비워내고
            있습니다. 주로 자바스크립트를 다루고 있습니다. 피드백은 언제나
            감사합니다!
          </span>
        </div>
      </div>
      <div className={aboutStyles.link}>
        <a
          href="mailto:akdud153@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a
          href="https://github.com/taerikor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Hub
        </a>
        {/* <Link 
        to=""
        style={{
          textDecoration:'line-through'

        }}
        >Resume</Link> */}
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    file(relativePath: { eq: "images/profile.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
  }
`
