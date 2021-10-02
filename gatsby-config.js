module.exports = {
  siteMetadata: {
    title: `CODE TETRIS`,
    description: `Let's talk development`,
    author: `Taeri Kim`,
    siteUrl: `https://codetetris.com`,
    gitUrl: `https://github.com/taerikor/gatsby-blog.git`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-H8GVSXRKTD`, 
        head: false, 
        anonymize: true,
      },
    },
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
    'gatsby-plugin-offline',
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
