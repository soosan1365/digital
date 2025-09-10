import React from 'react'
import Title from '../Helper/Title'
import { category } from '@/constant/constant'

const Category = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=''>
        <Title title="َCategory" />
      </div>
      <div className="w-[75%] mx-auto grid grid-cols-3 lg:grid-cols-6 justify-center items-center rounded-full gap-5   ">
        {category?.map((item,i) => (
      <p className='bg-[#ece7e7] rounded-full w-full py-3 text-center text-base  md:text-lg lg:text-xl
       font-bold dark:text-black/90 shadow-lg e'>{item.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Category
