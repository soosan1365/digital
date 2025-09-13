import React from 'react'

const Title = (props:{ title: string }) => {
  return (
    <div
      className=" w-full  h-[10vw] mx-auto flex justify-center items-center 
    text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold  mt-10 
    bg-gradient-to-r bg-clip-text text-transparent  from-[#52b36d]  to-[#a9e0bb] "
    >
      {props.title}
    </div>
  )
}

export default Title
