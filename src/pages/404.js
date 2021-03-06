import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title={`404`} />
      <h2>Not Found</h2>
      <p>아직 준비되지 않은 페이지 입니다.</p>
    </Layout>
  )
}
