import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects />
    </Layout>
  );
}