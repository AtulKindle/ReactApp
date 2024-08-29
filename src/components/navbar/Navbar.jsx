import React from 'react'

const navbar = () => {
  return (
    <>
        <nav className='relative z-10 w-full text-neutral-800'>
          <div className='flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4'>
              <div className='flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8'>
                <span className='w-full flex flex-row items-center justify-between py-6'>
                      <svg className='w-24 xl:w-28' xmlns="http://www.w3.org/2000/svg" width="176" height="40" fill="none" viewBox="0 0 176 40"><path fill="#283841" fill-rule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clip-rule="evenodd"></path><path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
                <button className='rounded-lg lg:hidden focus:outline-none focus:shadow-outline'>
                  <span>
                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg"><path d="M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9"></path></svg>
                  </span>
                </button>
                </span>
                <ul className='lg:ms-10 w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-start lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0 hidden lg:flex'>
                <li className=''>
                  <a href="/Home" className='md:px-4 py-2 text-base font-normal bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline'>Home</a>
                </li>
                <li className=''>
                  <a href="/Home" className='md:px-4 py-2 text-base font-normal bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline'>Home</a>
                </li>
                <li className=''>
                  <a href="/Home" className='md:px-4 py-2 text-base font-normal bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline'>Home</a>
                </li>
                <li className=''>
                  <a href="/Home" className='md:px-4 py-2 text-base font-normal bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline'>Home</a>
                </li>
                <li className=''>
                  <a href="/Home" className='md:px-4 py-2 text-base font-normal bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline'>Home</a>
                </li>
              </ul>
              </div> 
              <div class="space-x-3 hidden lg:flex">
                <button className='text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2   text-sky-400 border border-[#0c66ee]'>Login</button>
                <button className='text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white'>Signup</button>
              </div>
          </div>
        </nav>
    </>
  )
}

export default navbar