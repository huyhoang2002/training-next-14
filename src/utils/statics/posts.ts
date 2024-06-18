export interface Post {
  id: string
  slug: string
  title: string
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "post-1-slug",
    title: "Post 1"
  },
  {
    id: "2",
    slug: "post-2-slug",
    title: "Post 2"
  },
  {
    id: "3",
    slug: "post-3-slug",
    title: "Post 3"
  }
]