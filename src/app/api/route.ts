import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  try {
    const response = await fetch("http://localhost:5212/api/interviews", {
      cache: "force-cache"
    })
    return NextResponse.json(await response.json())
  } catch (error) {
    console.log(error)
  }
}

export const POST = async (request: NextRequest) => {
  try {
    const response = await fetch("http://localhost:5212/api/interviews/collection", {
      method: "POST",
      body: JSON.stringify(await request.json()),
      headers: {
        'Content-Type': "application/json"
      }
    })
    return NextResponse.json(await response.json())
  } catch (error) {
    console.log(error)
  }
}