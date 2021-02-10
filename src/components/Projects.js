import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card, Row, Col, CardTitle, CardText, Button, CardBody } from 'reactstrap';

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
        markdownRemark(frontmatter: {category: {eq: "project index"}}) {
          frontmatter {
            title
          }
        }
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                subtitle
                githubLink
              }
            }
          }
        }
      }      
    `);

  const sectionTitle = data.markdownRemark.frontmatter.title;
  const projects = data.allMarkdownRemark.edges;

  return (
    <div className="project-section-wrapper">
      <h4 className="project-title">{sectionTitle}</h4>
      {
        projects.length > 0 ? (
          <Row>
            {projects.map((project, index) => (
              <Col key={index} className="col-12 col-md-6 mb-1 mb-md-0">
                <Card className="h-100 project-card">
                  <CardBody>
                    <CardTitle tag="h5">{project.node.frontmatter.title}</CardTitle>
                    <CardText>{project.node.frontmatter.subtitle}</CardText>
                    <a href={project.node.frontmatter.githubLink}><Button type="button" size="sm" className="btn-custom">View source</Button></a>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
            <div>No any projects to show !</div>
          )
      }
    </div>
  );
}