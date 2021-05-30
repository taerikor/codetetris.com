import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

import "./index.css"

import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"
import { rhythm } from '../../utils/typography'

const profilePath = "../../images/profile.jpeg"

export default function About() {
  return (
    <Layout>
      <SEO title={`About`} />
      <div className="topic_container"
      style={{
        marginBottom:rhythm(1)
      }}
      >
        <span className="topic">"이 아이가 배부르다는 감정을 알까요?"</span>
      </div>
      <div className="bio_container">
        <StaticImage src={profilePath} alt="taeri" width={300} height={300} />
        <div className="meta_container">
          <h4 className="meta_name">Taeri Kim</h4>
          <span className="meta_info">
            {
` 공부는 단 한 번도 쉬운 적이 없고 눈을 뜨면 또 새로운 것이 생깁니다.
적어도 개발에 부딪히는 건 꽤 재밌습니다.
수많은 코드들을 보고 있으면 내가 카이사르 라도 된 기분입니다.
테트리스 하듯 쌓아가다 보니 군데군데 잘못 맞춰져 있는 곳이 많습니다.
내가 아는 것이 부족하더라도 글을 쓰며 비워내고 싶습니다.
주로 자바스크립트를 다루고 있습니다. 
피드백은 언제나 감사합니다!
`}
          </span>
        </div>
      </div>
      <div className="link_container"
      style={{
        marginTop:rhythm(2),
      }}
      >
        <a href="mailto:akdud153@gmail.com">Contact</a>
        <Link to="https://github.com/taerikor">Git Hub</Link>
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
