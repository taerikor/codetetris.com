import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

import "./index.css"

import { StaticImage } from "gatsby-plugin-image"
import SEO from "../../components/seo"

const profilePath = "../../images/profile.jpeg"

export default function About() {
  return (
    <Layout>
      <SEO title={`About`} />
      <div className="topic_container">
        <span className="topic">"이 아이가 배부르다는 감정을 알까요?"</span>
      </div>
      <div className="bio_container">
        <StaticImage src={profilePath} alt="taeri" width={300} height={300} />
        <div className="meta_container">
          <h4 className="meta_name">Taeri Kim</h4>
          <span className="meta_info">
            {`저는 항상 새로운 것을 섭취하길 갈망합니다.
            어려움을 즐기고...저는 항상 새로운 것을 섭취하길 갈망합니다.
            어려움을 즐기고...저는 항상 새로운 것을 섭취하길 갈망합니다.
            저는 항상 새로운 것을 섭취하길 갈망합니다.
            어려움을 즐기고...
            `}
          </span>
        </div>
      </div>
      <div className="link_container">
        <a href="mailto:akdud153@gmail.com">Contact</a>
        <Link to="https://github.com/taerikor">Git Hub</Link>
        <Link to="#">Resume</Link>
      </div>
    </Layout>
  )
}
