import { decreament, increament, useCounterStore } from "@/stores/counter"
import { Button } from "antd"
const MyApp = () => {
  // 基本使用
  // const counter = useCounterStore((state) => state.counter)
  // const decreament = useCounterStore((state) => state.decreament)
  // const increament = useCounterStore((state) => state.increament)
  // const counterStore = createSelectors(useCounterStore)
  // selector操作
  // const decreament = counterStore.use.decreament()
  // const increament = counterStore.use.increament()
  const counter = useCounterStore((state) => state.counter)
  return (
    <>
      <Button type="primary" onClick={decreament}>
        -1
      </Button>
      <div>{counter}</div>
      <Button type="primary" onClick={() => increament(11)}>
        +1
      </Button>
    </>
  )
}
export default MyApp
