import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="main h-[60px] w-full  ">
          <ul className='flex justify-between'>
          <li className='menu '>

          </li>
          <li className='logo h-full w-[50px]'>
            <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="keep" />
          </li>
          <li className='text-gray-50 font-light text-3xl mt-[7px]'>
            Keep
          </li>
          <li className=''>
          <input type="text" placeholder="Search.." name="search"/>
          
          </li>
          </ul>
        </div>

        <div className="line bg-zinc-600 w-full h-[1px]"></div>
    </div>
  )
}

export default Navbar