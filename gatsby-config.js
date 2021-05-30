module.exports = {
  siteMetadata: {
    title: `CODE TETRIS`,
    description: `Let's talk development`,
    author: `Taeri Kim`,
    keywords: [
      `blog`,
      `javascript`,
      `typescript`,
      `web`,
      `react`,
      `frontend`,
      `development`,
      `gatsby`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CODE TETRIS`,
        short_name: `CODE TETRIS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6b37bf`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Merriweather Sans",
              axes: "wght@800",
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
  ],
}
