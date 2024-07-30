import { StoreApi, UseBoundStore } from "zustand"

type WithSelectors<S> = S extends { getState: () => infer T }
  ? // S 是否继承于 { getState: () => infer T }，getState 做一个返回值的类型推断
    S & { use: { [K in keyof T]: () => T[K] } }
  : // 源store 交叉类型 use ：use是一个 由上推断出的类型，所组合而成的，类型，其是一个返回store对应类型的函数
    never

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store> // 为store新增一个use属性
  store.use = {}
  // use属性的值，是一个个的函数组成
  for (let k of Object.keys(store.getState())) {
    // 将获取state与action的方式都存于use中
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}
