import React from "react";
import { Link, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { post, postTitle, postDate } from "./post.module.css";

const Post = ({ title, date, image, path, slug }) => (
  <div className={post} onClick={() => navigate(slug)}>
    {image && (
      <GatsbyImage
        image={image.src.childImageSharp.gatsbyImageData}
        alt={image.alt}
      />
    )}
    <h3 className={postTitle}>{title}</h3>
    <p className={postDate}>{date}</p>
    <Link to={slug}>Read more</Link>
  </div>
);

export default Post;
