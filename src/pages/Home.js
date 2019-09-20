import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import VideoHero from '../components/VideoHero'

const Home = () => {
  return (
    <>
      <Hero>
        <VideoHero />
        <Banner
          title="spa island resort"
          subtitle="Retreat to island bliss at our Spa resort">
          <Link to="/rooms/" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services id="services"/>
      <FeaturedRooms />
    </>
  )
}

export default Home
