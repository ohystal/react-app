import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PostCard from "./components/PostCard/PostCard"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostCard />
  </StrictMode>,
)
