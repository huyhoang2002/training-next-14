'use client'

import React, { useEffect } from 'react'

interface Props {
  error: Error & { digest?: string }
  reset: () => void 
}

const error = ({ error, reset }: Props) => {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default error