import React from "react";
import { graphql, Link, navigate } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Navbar } from "../../components/navigation/navbar";
import {
  container,
  innerContainer,
  link,
  paragraph,
  heading,
  image,
  footerImage,
} from "./blogTemplate.module.css";

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
      html
    }
  }
`;

export default function BlogTemplate({ data }) {
  let title, date, featuredimage;
  const post = data.markdownRemark;
  if (post) {
    title = post.frontmatter.title;
    date = post.frontmatter.date;
    featuredimage = post.frontmatter.featuredimage;
  }

  return (
    <section>
      <Navbar />
      <div className={container}>
        <div className={innerContainer}>
          <Link className={link} to="/blog/blog">
            Back to blogs
          </Link>
          <h2 className={heading}>{title}</h2>
          <p>{date}</p>
          {featuredimage && (
            <GatsbyImage
              className={image}
              image={featuredimage.src.childImageSharp.gatsbyImageData}
              alt={featuredimage.alt}
            />
          )}
          {post && (
            <div className={paragraph}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          )}
          <div className={footerImage} onClick={() => navigate("/#footer")}>
            <StaticImage
              alt="Blog Post Footer"
              src="../../images/blog footer.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}