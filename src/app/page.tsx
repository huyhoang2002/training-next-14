import Link from 'next/link'
import React from 'react'


const Home = async () => {

  const uploadCollection = async (formData: FormData) => {
    'use server'
    const data = {
      collectionName: formData.get("collectionName")
    }
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': "application/json"
        }
      })
      console.log(response.body)
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p>Hello, Next.js !</p>
      <Link href={"/dashboard"}>Go to dashboard</Link>
      <form action={uploadCollection}>
        <div>
          <input type="text" name="collectionName" placeholder='collection name...'/>
          <button type="submit">Upload collection</button>
        </div>
      </form>
    </div>
  )
}

export default Home