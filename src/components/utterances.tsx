import React, { createRef, useLayoutEffect } from "react"

const src = "https://utteranc.es/client.js"

export interface IUtterancesProps {
  repo: string
  theme?: string
}
const DARK_THEME = "photon-dark"
const LIGHT_THEME = "github-light"

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo }) => {
  const containerRef = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const utterances = document.createElement("script")
    const isDarkTheme = localStorage.getItem("theme") === "dark"
    const attributes = {
      src,
      repo,
      theme: isDarkTheme ? DARK_THEME : LIGHT_THEME,
      "issue-term": "pathname",
      label: "Comments",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current!.appendChild(utterances)
  }, [repo])

  return <div ref={containerRef} />
})

Utterances.displayName = "Utterances"

export default Utterances
