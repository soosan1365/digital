import React from 'react'

const Title = (props:{ title: string }) => {
  return (
    <div
      className=" w-full  h-[10vw] mx-auto flex justify-center items-center text-xl 
    sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold  mt-12 
    bg-gradient-to-t bg-clip-text text-transparent from-[#55af69] to-[rgb(98,166,187)] "
    >
      {props.title}
    </div>
  )
}

export default Title
