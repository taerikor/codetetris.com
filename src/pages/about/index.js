import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"

import * as aboutStyles from "./about.module.css"

const profilePath = "../../images/profile.jpeg"

export default function About() {
  return (
    <Layout>
      <SEO title={`About`} />
      <div className={aboutStyles.topic}>
        <span className={aboutStyles.topic__text}>
          "이 아이가 배부르다는 감정을 알까요?"
        </span>
      </div>
      <div className={aboutStyles.bio}>
        <StaticImage src={profilePath} alt="taeri" width={300} height={300} />
        <div className={aboutStyles.meta}>
          <h4 className={aboutStyles.meta__name}>Taeri Kim</h4>
          <span className={aboutStyles.meta__content}>
            {` 공부는 단 한 번도 쉬운 적이 없고 눈을 뜨면 또 새로운 것이 생깁니다.
적어도 개발에 부딪히는 건 꽤 재밌습니다. 항상 의도한 대로 되진 않지만 말이죠.
테트리스 하듯 쌓아가다 보니 군데군데 잘못 맞춰져 있는 곳이 많습니다.
내가 아는 것이 부족하더라도 글을 쓰며 비워내고 싶습니다.
주로 자바스크립트를 다루고 있습니다. 
피드백은 언제나 감사합니다!
`}
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
