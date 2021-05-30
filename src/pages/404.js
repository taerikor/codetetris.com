import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title={`404`} />
      <h1>Not Found</h1>
      <p>I haven’t written this post yet.</p>
    </Layout>
  )
}
