import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <Layout>
            <div className="error-section-wrapper">
                <SEO title="404: Not found" />
                <section>
                    <h2 className="error-title">Not Found</h2>
                    <h5>You just hit a route that doesn't exist ...</h5>
                </section>
            </div>
        </Layout>
    );
}