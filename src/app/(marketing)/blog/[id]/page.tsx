import { posts } from '@/utils/statics/posts'
import React from 'react'

const page = ({ params }: { params: { id: string }}) => {
  console.log(params)
  var post = posts.find(post => post.id === params.id)
  return (
    <div>Blog {post?.title}</div>
  )
}

export default page