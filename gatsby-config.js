module.exports = {
  siteMetadata: {
    title: `Portafolio Personal`,
    description: `Portafolio Personal de Ulises Cipres. Programador web freelance en tecnologias como React.js, Gatsby.js, Html, Css, Sass, Jest,  de Michoacan Mexico `,
    author: `@UlisesCipres`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ulises Cipres`,
        short_name: `UlisesCm`,
        start_url: `/`,
        background_color: `#336C99`,
        theme_color: `#336C99`,
        display: `minimal-ui`,
        icon: `src/images/icons/codificacion-web.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-svg`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
