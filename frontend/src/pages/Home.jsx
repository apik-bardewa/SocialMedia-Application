import React from 'react'
import LeftHome from './component/LeftHome'
import CenterHome from './component/CenterHome'
import RightHome from './component/RightHome'

function Home() {
  return (
    <div className='flex justify-center'>
      <LeftHome/>
      <CenterHome/>
      <RightHome/>
    </div>
  )
}
export default Home
