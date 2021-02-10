const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "blog"}}}, 
        sort: {fields: frontmatter___date, order: DESC}
        ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = (index === posts.length - 1) ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next
      }
    });
  });
}