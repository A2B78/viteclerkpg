import React from 'react'
import { Button } from './components/ui/button'

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-center text-3xl'>ErroR</h1>
      <Button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">Si tu est là, c'est que tu es perdu</a>
      </Button>
      <div className="flex justify-center">
      </div>
    </div>
  )
}

export default Error
