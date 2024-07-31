import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "normalize.css"
import "tailwindcss/tailwind.css"
import { RouterProvider } from "react-router-dom"
import router from "./router/index.tsx"
// @ts-ignore
import { ClickToComponent } from "click-to-react-component"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <ClickToComponent />
  </>
)
