import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Tag from '../components/Tag';

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <div className="template-section-wrapper">
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
        />
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <h6 className="form-text text-muted">{post.frontmatter.date}</h6>
        <Tag tags={post.frontmatter.tags} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="html-post-description" />
        <div>
          {previous && (
            <Link className="link-style previous-node" to={previous.fields.slug} rel="previous">←{previous.frontmatter.title}</Link>
          )}
          {next && (
            <Link className="link-style next-node" to={next.fields.slug} rel="next">{next.frontmatter.title}→</Link>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query( $slug: String! ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`