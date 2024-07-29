# 2024/07/29 学习笔记

## React开发小工具

### click-to-react-component

- 页面中通过`alt + 鼠标左键`快速跳转到`vscode`对应组件位置
- `alt + 鼠标右键`，再页面中展示组件的子组件，点击可以快速跳转到`vscode`对应组件位置

```shell
pnpm add -D click-to-react-component
```

```tsx
// main.tsx
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "normalize.css"
import "tailwindcss/tailwind.css"
// @ts-ignore
import { ClickToComponent } from "click-to-react-component"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ClickToComponent />
  </>
)
```

## React中类似插槽的实现

### 基本实现

直接在父组件中写入元素，并在内部通过`React.Children`进行渲染，如下

```tsx
  <SlotTest>
     <h3 className=" text-red-300">我是插入数据1</h3>
     <h3 className=" text-red-400">我是插入数据2</h3>
     <h3 className=" text-red-500">我是插入数据3</h3>
   </SlotTest>
```

```tsx
// Slot.tsx
import { FC } from "react"
import React, { ReactNode } from "react"
interface SlotProps {
  children: ReactNode
}
const SlotTest: FC<SlotProps> = (props) => {
  const { children } = props
  console.log(children)
  return (
    <>
      <h1>我是父组件</h1>
      {React.Children.map(children, (item) => (
        <div  className="bg-slate-500">{item}</div>
      ))}
    </>
  )
}
```

> 这种方式可认为是默认插槽

### 具名插槽

在组件中使用`props`接收对应的元素，在使用对应的组件时传入并进行操作

```tsx
// import dayjs from "dayjs"
import { FC } from "react"
import SlotTest from "~components/Slot"

function App() {
  // const currentDate = dayjs()
  return (
    <>
      <SlotTest header={<Header />}>
        <h3 className=" text-red-300">我是插入数据1</h3>
        <h3 className=" text-red-400">我是插入数据2</h3>
        <h3 className=" text-red-500">我是插入数据3</h3>
      </SlotTest>
    </>
  )
}
const Header: FC = () => {
  return (
    <>
      <h2>我是头部组件</h2>
    </>
  )
}
export default App

```

```tsx
import React, { ReactNode, FC } from "react"
interface SlotProps {
  children: ReactNode
  header?: ReactNode
}
const SlotTest: FC<SlotProps> = (props) => {
  const { children, header } = props
  console.log(children)
  return (
    <>
      <h1>我是父组件</h1>
      {React.Children.map(children, (item) => (
        <div className="bg-slate-500">{item}</div>
      ))}
      {header || ""}
    </>
  )
}
```
