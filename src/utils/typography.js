import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

// const typography = new Typography({
//     baseFontSize: "17px",
//     baseLineHeight:"1.82",
//     scaleRatio:"2.25",
//     googleFonts: [
//         {
//             name: 'Do Hyeon',
//             styles: ["400"],
//           },
//           {
//             name: "Open Sans",
//             styles: ["400", "700"],
//           },
//     ],
//     headerFontFamily: ['Do Hyeon', "sans-serif"],
//     bodyFontFamily: ["Open Sans", "sans-serif"],
//     headerWeight: 800,
//     bodyWeight: 400,
//     boldWeight: 700,
//   })

const typography = new Typography(parnassusTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
