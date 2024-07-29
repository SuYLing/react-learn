import { FC } from "react"
export interface ItemProps {
  mes: string
}
const Item: FC<ItemProps> = () => {
  return (
    <>
      <h2>Item</h2>
    </>
  )
}
export default Item
