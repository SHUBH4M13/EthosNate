import React from 'react'
import { useNavigate } from 'react-router'
import PhotoGrid from "./PhotoGrid"

function Herosection() {
    const navigate = useNavigate();
    return (
        <div>
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-12 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#3b7d2e]">
                            Trustless Donations. Trusted Results.
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
                            With EthosNate, your contributions are secured on-chain — visible to all, controlled by none.
                            Build impact with smart contracts, not middlemen.</p>
                        <button 
                        onClick={ () => { navigate("/add/campaign")}}
                        className=" cursor-pointer inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#3b7d2e] hover:bg-[#255e1b] focus:ring-4 focus:ring-[#3b7d2e]/30 transition-colors duration-200"
                        >
                            Create a Campaign
                        </button>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <PhotoGrid/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Herosection;