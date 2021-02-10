import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Hero() {
  const data = useStaticQuery(
    graphql`
    query{
      markdownRemark(frontmatter: {category: {eq: "hero index"}}) {
        frontmatter {
          title
          intro
          content
        }
        html
      }
    }
    
        `
  )
  return (
    <div className="section-parent-wrapper">
      <div className="hero-section-wrapper">
        {/* <h6 className="hero-title">{data.markdownRemark.frontmatter.title}</h6> */}
        <h3 className="hero-intro">{data.markdownRemark.frontmatter.intro}</h3>
        <div className="hero-content">{data.markdownRemark.frontmatter.content}</div>
        <div className="mt-3" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  );
}