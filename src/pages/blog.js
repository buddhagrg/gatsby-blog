import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';

export default function Blog({ data }) {
  return (
    <Layout>
      <div className="blog-section-wrapper">
        <SEO title="Blog" />
        <div className="blog-index-title">{data.markdownRemark.frontmatter.title}</div>
        <ul className="post-ul">
          {
            data.allMarkdownRemark.edges.map(edge => {
              return (
                <li key={edge.node.id} className="post-list">
                  <h3><Link to={edge.node.fields.slug} className="post-title-link">{edge.node.frontmatter.title}</Link></h3>
                  <h6 className="form-text text-muted">{edge.node.frontmatter.date}</h6>
                  <p className="post-excerpt">{edge.node.excerpt}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
    query{
      markdownRemark(frontmatter: {category: {eq: "blog index"}}) {
        frontmatter {
          title
        }
      }
      allMarkdownRemark(
          filter: {frontmatter: {category: {eq: "blog"}, published: {eq: true}}}
          sort: {fields: frontmatter___date, order: DESC}
          ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            excerpt(pruneLength: 160)
            fields {
              slug
            }
          }
        }
      }
      }
`