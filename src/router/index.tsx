import Home from "@/views/Home"
import { createBrowserRouter } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
]
const router = createBrowserRouter(routes)
export default router
