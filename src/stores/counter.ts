import { create } from "zustand"

type State = {
  counter: number
}
type Action = {
  increament: (num: number) => void
  decreament: () => void
}
// export const useCounterStore = create<State & Action>((set) => {
//   return {
//     counter: 1,
//     increament: (num: number) =>
//       set(({ counter }) => ({ counter: counter + num })),
//     decreament: () => set(({ counter }) => ({ counter: counter - 1 })),
//   }
// })
// 无action操作
export const useCounterStore = create<State>(() => {
  return {
    counter: 1,
  }
})
export const decreament = () =>
  useCounterStore.setState(({ counter }) => ({
    counter: counter - 1,
  }))
export const increament = (num: number) =>
  useCounterStore.setState(({ counter }) => ({
    counter: counter + num,
  }))
