import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <div className="flex gap-[2%] flex-wrap content-stretch flex-row-reverse justify-start items-stretch">
        <div className="w-full h-[5%]"><Header /></div>
        <div className="w-1/4 h-3/4">Sidebar</div>
        <div className="grow h-3/4">Content</div>
        <div className="w-full h-[5%]">Footer</div>
    </div>
    </>
  )
}

export default Home
