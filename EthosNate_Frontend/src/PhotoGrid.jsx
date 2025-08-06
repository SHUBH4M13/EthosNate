import React from 'react'
import PoorKidp1 from "./Assets/PoorKidp1.jpg"
import PoorKid2 from "./Assets/PoorKid2.jpg"
import PoorKid3 from "./Assets/PoorKid3.jpg"


export default function PhotoGrid() {
    return (
        <div className=' flex gap-3 '>
            <div className=' w-[250px] h-[250px] rounded-xl'>
                <img
                    className=' rounded-3xl'
                    src={PoorKidp1} alt="" />
            </div>

            <div className=' w-[250px] flex flex-col gap-10  rounded-xl'>
                <div>
                    <img
                        className='rounded-3xl'
                        src={PoorKid2} alt="" />
                </div>
            </div>
        </div>
    )
}
