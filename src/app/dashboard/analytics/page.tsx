import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<p>Loading analytics data...</p>}>
      <div>Analytics page</div>
    </Suspense>
  )
}

export default page