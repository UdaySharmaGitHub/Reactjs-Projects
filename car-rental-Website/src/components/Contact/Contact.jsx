import React from 'react'

export const Contact = () => {
  return (
    <div className='container py-16 text-white' id='booking'>
        <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-10 px-6" >
            <div  className='col-span-2 space-y-3'>
                <h1 className='text-4xl'>Let's collaborate on your upcoming car rental venture</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore corporis animi aspernatur quaerat nam libero cupiditate!</p>
            </div>
            <div className='inline-block justify-center flex items-center'><button>Contact</button></div>
        </div>
    </div>
  )
}
