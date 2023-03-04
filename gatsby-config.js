module.exports = {
  siteMetadata: {
    title: `Animated Explainer Videos Production Australia | SocioPixels`,
    description: `SocioPixels is a Melbourne-based Animated Video Production Company that creates custom animated videos to educate your customers about your idea, concept or product, increase brand awareness, connect better with customers and generate leads.`,
    author: `SocioPixels`,
    siteUrl: `https://www.sociopixels.com.au`,
    keywords: `animated video, video maker, animated video maker, video animation, video explainer, video production service, promotion videos`,
    image: `src/images/Logo-2020-Small.jpg`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NNRH8S2",
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-SMX843DEWF", // Google Analytics / GA
          "UA-257750036-1",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/static/**"] },
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
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "sociopixels.com.au",
        protocol: "https",
        hostname: "www.sociopixels.com.au",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "AW-11059227458",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
  ],
};
