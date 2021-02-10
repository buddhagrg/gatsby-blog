import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export default function Header() {
    const data = useStaticQuery(graphql`
    query {
        avatar: file(relativePath: {eq: "profile-pic.jpg"}) {
          childImageSharp {
            fixed(width: 70, height: 70) {
                  ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `);

    const avatar = data.avatar.childImageSharp.fixed;

    return (
        <div className="section-parent-wrapper">
            <header className="header-section-wrapper">
                <Link to="/">
                    <Image fixed={avatar} imgStyle={{ borderRadius: `50%`, display: 'inline' }} />
                </Link>
                <ul className="nav-ul">
                    <li>
                        <Link to="/blog" activeClassName="active-nav-link" className="nav-link">Blog</Link>
                    </li>
                </ul>
            </header>
        </div >
    );
}