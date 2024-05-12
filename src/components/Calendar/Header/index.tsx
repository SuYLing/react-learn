import { Dayjs } from "dayjs"
import styled from "./index.module.less"
interface HeaderProps {
  curMonth: Dayjs
  prevMonthHandler: () => void
  nextMonthHandler: () => void
  todayHandler: () => void
}
const Header = (props: HeaderProps) => {
  return (
    <div className="calendar-header flex justify-start">
      <div className="calendar-header-left flex items-center justify-center h-[28px]">
        <div
          className={`${styled["calendar-header-icon"]} cursor-pointer mr-[12px]  text-center text-[12px] select-none width-[28px] h-[28px] rounded-fulltext`}
          onClick={props.prevMonthHandler}
        >
          &lt;
        </div>
        <div className={`${styled["calendar-header-value "]} text-[20px]`}>
          {props.curMonth.format("YYYY 年 MM 月")}
        </div>
        <div
          className={`${styled["calendar-header-icon"]} cursor-pointer mr-[12px]  text-center text-[12px] select-none width-[28px] h-[28px] rounded-fulltext`}
          onClick={props.nextMonthHandler}
        >
          &gt;
        </div>
        <button
          className={`${styled["calendar-header-btn"]} px-[15px] bg-[#eee] cursor-pointer border-none`}
          onClick={props.todayHandler}
        >
          今天
        </button>
      </div>
    </div>
  )
}
export default Header
