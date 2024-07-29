import { FC } from "react"
import React, { ReactNode } from "react"
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
export default SlotTest
