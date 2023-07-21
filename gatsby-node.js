exports.createPages = ({ actions, graphql }) => {
  const path = require("path");
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/pages/blog/blogTemplate.js");

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        image: node.frontmatter.image,
        component: postTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
