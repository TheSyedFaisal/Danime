import Footer from '@/components/Footer'
import Brand from '@/components/home-page/brand-story'
import Features from '@/components/home-page/features-section'
import HeroSection from '@/components/home-page/hero-section'
import HotSellers from '@/components/home-page/hot-sellers'
import CardSection from '../collections/page'



const Home = () => {
  return (
    <div className='relative z-0 '>
      <HeroSection />
      <CardSection />
      <Features />
      <HotSellers />
      <Brand />
    </div>
  )
}

export default Home