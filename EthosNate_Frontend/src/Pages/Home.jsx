import React from 'react'
import Herosection from '../Herosection'
import Footer from '../Footer'
import CharityCards from "../CharityCards"
import QuotesCarasouel from "../QuotesCarousel"

export default function Home() {
  return (
    <>
      <Herosection />
      <QuotesCarasouel />
      <div className=' flex justify-center items-center  h-[500px] '>
        <CharityCards />
      </div>
      <Footer />
    </>

  )
}
