import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostView } from './components/PostView/PostView'
import { Post } from './components/PostListView/PostListView'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostView post={Post} />
  </StrictMode>,
)

console.log(fetch("api/posts")
    .then((response) => response.json()))
