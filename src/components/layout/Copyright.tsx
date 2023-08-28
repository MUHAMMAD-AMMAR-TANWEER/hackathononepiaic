import React from 'react'

const Copyright = () => {
  return (
    <div className='flex justify-evenly border border-t-black py-4 tablet:flex-col gap-y-1 px-6'>
        <p className='text-gray-500'>Copyright © 2022 Dine Market</p>
        <p className='text-gray-500'>Design by. <span className='font-bold text-black'>OP Desingers</span></p>
        <p className='text-gray-500'>Code by. <span className='font-bold text-black'>OP developers</span></p>
    </div>
  )
}

export default Copyright