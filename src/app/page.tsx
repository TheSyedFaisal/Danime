import Brand from '@/components/home-page/brand-story'
import CardSection from '@/components/home-page/card-section'
import Features from '@/components/home-page/features-section'
import HeroSection from '@/components/home-page/hero-section'
import React from 'react'

const Home = () => {
  return (
    <div className='relative z-0 '>
      <HeroSection />
      <CardSection />
      <Features />
      <Brand />
    </div>
  )
}

export default Home