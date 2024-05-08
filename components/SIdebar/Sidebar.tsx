import { Divider } from '@mui/material';
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  const modules = ['Dashboard', 'Attendence', 'Departments', 'Students'];
  return (
    <div className=' flex flex-col bg-slate-500 h-full text-cyan-300 justify-center  gap-4 w-40 '>
    
      {modules.map((module, index) => (
        <div key={index} className="  hover:text-black h text-center shadow-md hover:shadow-none">
          <Link href={`/${module}`}>
            {module}
          </Link>
        <Divider />

        </div>
      ))}

       
    </div>
  )
}

export default Sidebar
