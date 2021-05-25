import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"


const typography = new Typography(parnassusTheme)

typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
