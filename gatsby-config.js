module.exports = {
  siteMetadata: {
    title: `Animated Explainer Videos Production Australia | SocioPixels`,
    description: `SocioPixels is a Melbourne-based Animated Video Production Company that creates custom animated videos to educate your customers about your idea, concept or product, increase brand awareness, connect better with customers and generate leads.`,
    siteUrl: `https://www.sociopixels.com.au`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
        bucketName: "sociopixels.com.au",
        protocol: "https",
        hostname: "www.sociopixels.com.au",
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "AW-11059227458",
      },
    },

  ]
};
