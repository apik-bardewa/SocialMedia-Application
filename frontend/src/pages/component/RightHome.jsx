// import React from 'react'
// import RightProfile from './RightProfile'
// import Follower from './Follower'

// function RightHome() {
//   return (
//     <div className='flex flex-col gap-2'>
//       <RightProfile/><hr></hr>
//       <label className='flex justify-between  w-90 mx-6'><span>Suggest For you</span><span>See all</span></label>
//       <div className='h-120 overflow-y-auto flex flex-col gap-2 no-scrollbar'>
//         {[1,2,3,4,5,6,7,8].map((item,index)=>{
//           return(<div key={item} className='flex,flex-cols '>
//             <Follower/>
//           </div>)
//         })}
//       </div>
//     </div>
//   )
// }

// export default RightHome


import React from 'react'
import RightProfile from './RightProfile'
import Follower from './Follower'

function RightHome() {
  return (
    <div className='flex flex-col gap-2'>
      <RightProfile/><hr></hr>
      <label className='flex justify-between  w-90 mx-6'><span>Suggest For you</span><span>See all</span></label>
      <div className='h-120 overflow-y-auto flex flex-col gap-2 no-scrollbar'>
        {[1,2,3,4,5,6,7,8].map((item,index)=>{
          return(<div key={item} className='flex,flex-col '>
            <Follower/>
          </div>)
        })}
      </div>
    </div>
  )
}

export default RightHome