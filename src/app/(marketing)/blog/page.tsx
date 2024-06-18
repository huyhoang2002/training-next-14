import { posts } from '@/utils/statics/posts'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Marketing blog</h1>
      {posts.map(post => {
        return <li>
          <Link key={post.id} href={`blog/${post.id}`}>{post.title}</Link>
        </li>
      })}
    </div>
  )
}

export default page