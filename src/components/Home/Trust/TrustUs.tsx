import React from 'react'
import Title from '../Helper/Title'
import Image from 'next/image'
import original from "@/../public/assets/original.png"
import price from "@/../public/assets/price.png"
import returnPro  from "@/../public/assets/return.png"

const TrustUs = () => {
  return (
    <div  className='relaive  flex flex-col justify-center items-center'>
        <Title title="Trust us" />
        
        <div className=' flex flex-col sm:flex-row justify-between items-center gap-10 md:gap-20 '>
           <Image src={original} alt=''  width={200} height={100}/>
            <Image src={price} alt=''  width={200} height={100}/>
             <Image src={returnPro} alt='' width={200} height={100}/>
        </div>
       
    </div>
  )
}

export default TrustUs