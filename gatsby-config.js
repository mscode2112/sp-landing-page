const siteUrl = process.env.URL || `https://fallback.net`;

module.exports = {
  siteMetadata: {
    title: `Animated Explainer Videos Production Australia | SocioPixels`,
    description: `Captivate your customers with Animated Explainer videos that are sure to increase brand awareness, engage customers and boost leads.`,
    author: `@sociopixels`,
    siteUrl: `https://www.sociopixels.com.au`,
    keywords: `animated video, explainer video, animated video production companies, video production, video animation, video explainer, video production service, promotion videos`,
    image: `src/images/Logo-2020-Small.jpg`,
  },
  plugins: [
    "gatsby-source-filesystem-markdown-slug",
    "gatsby-plugin-minify",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.sociopixels.com.au",
        sitemap: "https://www.sociopixels.com.au/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/", disallow: "/thankYou" }],
      },
    },
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
        path: `${__dirname}/content`,
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
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "<em>What you will Learn</em>",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              //className: "table-of-contents",
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
  ],
};
