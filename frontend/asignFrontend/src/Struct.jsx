import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Colnavbar2'
import Header from './Header2'
import { Dashboard } from './Dashboard'

const Struct = () => {
  return (
    <>
      <div className=' bg-gray-900 h-screen w-screen overflow-hidden flex flex-row'>
        <Navbar/>
        <div className='flex flex-col flex-1'>
          <Header/>
          <div className=' flex-1 p-4 min-h-0 overflow-auto'>
             <Outlet/>
             <div className=' flex items-center justify-center flex-col gap-6 h-full'>
             <h1 className=' text-6xl text-green-500'>This is Home page</h1>
             <span className=' text-2xl text-green-600'> Go to Dashboard to see the charts</span>
             </div>
          </div>
        </div>

      </div>
    </>
    
  )
}

export default Struct