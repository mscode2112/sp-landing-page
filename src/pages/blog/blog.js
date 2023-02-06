import React from "react";
import { graphql } from "gatsby";
import Post from "./post";
import { Navbar } from "../../components/navigation/navbar";
import {
  container,
  innerContainer,
  wrapper,
  titleSection,
  titlePart1,
  titlePart2,
  blogSection,
} from "./blog.module.css";

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            path
            featuredimage {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`;
const Blog = ({ data }) => {
  function getBlogs(data) {
    const blogArray = [];
    data.allMarkdownRemark.edges.map((edge) => {
      const { title, date, path, featuredimage } = edge.node.frontmatter;

      blogArray.push(
        <Post
          key={`${date}__${title}`}
          title={title}
          date={date}
          image={featuredimage}
          path={path}
        ></Post>
      );
      return blogArray;
    });
    return blogArray;
  }
  return (
    <section>
      <Navbar />
      <div className={container}>
        <div className={innerContainer}>
          <div className={wrapper}>
            <div className={titleSection}>
              <h2>
                <span className={titlePart1}>Read Our</span>
                <span className={titlePart2}> Latest</span>
              </h2>
            </div>
            <div className={blogSection}>{getBlogs(data)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
