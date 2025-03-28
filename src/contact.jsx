import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-center text-3xl'>Contact</h1>
        <div className="flex justify-center">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    
                    </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
                </div>
                </div>
                
                </form>
                </div>
    </div>
  )
}

export default Contact
