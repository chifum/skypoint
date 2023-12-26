import React from 'react'


const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between bgColor h-[63px]">
      <div className="flex flex-col flex-wrap md:flex-row justify-evenly basis-1/4 shrink grow md:m-auto p-2 md:basis-1/3">
        <p className="md:m-auto text-xs lg:text-lg ml-2 text-white">0452 370 284</p>
        <p className="md:text-center md:m-auto text-xs lg:text-lg ml-2 text-white">info@skypointsupportservice.com.au</p>
      </div>
      <div className="basis-1/4 md:basis-1/3 shrink grow bg-secondary flex justify-end md:m-auto p-2"><a className="text-white no-underline mr-8" href="/">Appointment</a></div>
    </div>
  )
}

export default Nav
