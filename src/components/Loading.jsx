import React from 'react'
import * as Loader from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Loader.CirclesWithBar color="blue" ariaLabel="circles-with-indicator" />
    </div>
  )
}
