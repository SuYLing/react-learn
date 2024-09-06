// import dayjs from "dayjs"
import { FC } from "react"
// import SlotTest from "~components/Slot"
import MyApp from "./components/AC"
function App() {
  // const currentDate = dayjs()
  return (
    <>
      {/* <SlotTest header={<Header />}>
        <h3 className=" text-red-300">我是插入数据1</h3>
        <h3 className=" text-red-400">我是插入数据2</h3>
        <h3 className=" text-red-500">我是插入数据3</h3>
      </SlotTest> */}
      <MyApp />
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
