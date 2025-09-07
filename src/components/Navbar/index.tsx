import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon, ShoppingBasketIcon } from 'lucide-react'
import logo from "@/assets/logo.png"
import { navs } from '@/assets/productData'
import { Button } from '@/components/ui'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
const Navbar = () => {
  return (
    <div className=" fixed w-full  px-4 md:px-20   font-serif   z-50  ">
      <nav
        className=" rounded-4xl 
      bg-gradient-to-b from-[#3d3634] to-[#4b4a4a] flex justify-between items-center p-2"
      >
        {/* right */}
        <Link href="/">
        <Image className="w-[7vw] min-w-18" src={logo} alt="" /></Link>
        {/* center */}
        <div className=" hidden md:flex justify-center items-center gap-3 md:gap-5 lg:gap-12 ">
          {navs.map((item, index) => (
            <ul
              className="text-gray-50 hover:text-black cursor-pointer text-sm sm:text-base
                md:text-lg lg:text-xl" 
              key={index}
            >
              <li className='' key={index}>
                <Link href={item.link}>{item.titlt}</Link>
              </li>
            </ul>
          ))}
        </div>
        {/* left */}
        <div className="flex items-center justify-center gap-3  text-white  ">
          <Button variant="destructive" > sign in </Button>
          <ShoppingBasketIcon className='lg:w-10 lg:h-10'/>
          <div className=" md:hidden  ">
            {/* mobile mode */}
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent>
                <div className="  flex flex-col justify-center items-start ml-8 gap-6 lg:gap-12 mt-15 ">
                  {navs.map((item, index) => (
                    <ul
                      className="   w-2/3  p-2 font-semibold text-sm rounded-r-full bg-gradient-to-r  from-[#c9f5d5] to-[#cad7df] text-gray-800 hover:text-black cursor-pointer
             "
                      key={index}
                    >
                      <li key={index}>
                        <Link href={item.link}>{item.titlt}</Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
