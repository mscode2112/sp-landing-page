module.exports = {
  siteMetadata: {
    title: `SP Landing Page`,
    siteUrl: `https://www.sociopixels.com.au`
  },
  plugins: [
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: ['/static/**'] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "sociopixelslandingpagebucket",
        protocol: "http",
        hostname: "www.sociopixels.com.au",
      }
  }

  ]
};