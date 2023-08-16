import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
// import './App.css'

// Import Pages
import VideoDetail from './pages/VideoDetail'
import Video from './pages/Video'
import RootLayout from './layouts/RootLayout'
import AddVideoForm from './pages/AddVideoForm'
import AddProductForm from './pages/AddProductForm'

// Router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<RootLayout />}>
      <Route index element={<Video />} />
      <Route path="video/:id" element ={<VideoDetail/>} />
      <Route path="post/video" element ={<AddVideoForm/>} />
      <Route path="post/product/:videoId" element ={<AddProductForm/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
