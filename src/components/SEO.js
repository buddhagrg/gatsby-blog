import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ description, meta, lang, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata{
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                }
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    title: `Title`
}

export default SEO;