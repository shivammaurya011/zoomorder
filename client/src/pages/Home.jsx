import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Layout from '../layout/Index';
import QuickSearch from '../components/home/QuickSearch';

function Home() {
  return (
    <Layout>
      <HeroSection />
      <QuickSearch />
    </Layout>
  );
}

export default Home;