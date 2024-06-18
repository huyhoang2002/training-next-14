const page = () => {

  const loginAction = async () => {
    'use server'
    try {
      const response = await fetch("http://localhost:5212/api/auth/login")
      console.log(await response.json())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form action={loginAction}>
        <input type="text" name="email" id="" />
        <input type="text" name="password" id="" />
        <button type="submit" className='bg-red-500'>Login</button>
      </form>
    </div>
  )
}

export default page