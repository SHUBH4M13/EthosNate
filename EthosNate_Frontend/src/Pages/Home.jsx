import React from 'react'
import Herosection from '../Herosection'
import Footer from '../Footer'
import CharityCards from "../CharityCards"
import QuotesCarasouel from "../QuotesCarousel"
import CampaginSection from "../CampaginSection"

export default function Home() {
  return (
    <>
      <Herosection />
      <QuotesCarasouel />
      <p className=' text-center font-semibold text-4xl text-[#2e7d32] py-5'>On-Going Campaigns</p>
      <div className=' h-[500px] '>
      <CampaginSection/>
      </div>
      <Footer />
    </>

  )
}
