import styled from "./index.module.less"
import MonthCalendar from "./MonthCalendar"
import Header from "./Header"
import dayjs, { Dayjs } from "dayjs"
import { CSSProperties, ReactNode, useState } from "react"
import cs from "classnames"
export interface CalendarProps {
  value: Dayjs
  style?: CSSProperties
  className?: string | string[]
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode
  // 国际化相关
  locale?: string
  onChange?: (date: Dayjs) => void
}
const Calendar = (props: CalendarProps) => {
  const { value, style, className, onChange } = props
  const [currentValue, setCurrentValue] = useState(value)
  const [curMonth, setCurMonth] = useState<Dayjs>(value)
  const changeDate = (date: Dayjs) => {
    setCurrentValue(date)
    setCurMonth(date)
    onChange?.(date)
  }
  const prevMonthHandler = () => {
    setCurMonth(curMonth.subtract(1, "month"))
  }

  const nextMonthHandler = () => {
    setCurMonth(curMonth.add(1, "month"))
  }
  const classNames = cs(styled.calendar, className)
  const selectHandler = (date: Dayjs) => {
    changeDate(date)
  }
  const todayHandler = () => {
    const date = dayjs(Date.now())
    changeDate(date)
  }
  return (
    <div className={classNames} style={style}>
      <Header
        curMonth={curMonth}
        todayHandler={todayHandler}
        nextMonthHandler={nextMonthHandler}
        prevMonthHandler={prevMonthHandler}
      />
      <MonthCalendar
        {...props}
        value={currentValue}
        selectHandler={selectHandler}
        curMonth={curMonth}
      />
    </div>
  )
}
export default Calendar
