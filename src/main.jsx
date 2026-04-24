import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Posts from './components/Posts';
import Users from './components/Users';
import Comments from './components/Comments';
import PostDetails from './components/PostDetails';
import UserDetails from './components/UserDetails';
import CommentDetails from './components/CommentDetails';

const router = new createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: "/user/:userId",
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: "/comments",
        element: <Comments></Comments>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments")
      },
      {
        path: "/comment/:commentId",
        element: <CommentDetails></CommentDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
