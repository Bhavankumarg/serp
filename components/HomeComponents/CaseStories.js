import Image from 'next/image'
import React from 'react'

const CaseStories = () => {
  return (
    <>
      <div className='bg-[#F5E582] lg:pb-20 pb-5 lg:pt-10 lg:mt-10 mt-5'>
        <h1 className='text-center text-3xl p-4'>Case Stories</h1>
      
      <div className='container mx-auto flex items-center justify-center lg:mt-5'>
        <Image src="/Home/banner5.png" alt="Case Stories Banner" width={1200} height={1000} className='w-full p-5 lg:p-0'/>
      </div>
      </div>
    </>
  )
}

export default CaseStories
