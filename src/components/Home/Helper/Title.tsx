import React from 'react'

const Title = (props:{ title: string }) => {
  return (
    <div
      className=" w-full  h-[10vw] mx-auto flex justify-center items-center 
    text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold  mt-12 
    bg-gradient-to-t bg-clip-text text-transparent from-[#55af69] to-[rgb(98,166,187)] "
    >
      {props.title}
    </div>
  )
}

export default Title
