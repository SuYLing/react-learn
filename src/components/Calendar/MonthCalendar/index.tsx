import { CalendarProps } from ".."
import styled from "./index.module.less"

import { Dayjs } from "dayjs"
import cs from "classnames"
import { getAllDays } from "@/utils/time"
interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void
  curMonth: Dayjs
}

const MonthCalendar = (props: MonthCalendarProps) => {
  const weekList = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  const { dateRender, dateInnerContent, selectHandler, value, curMonth } = props
  const renderDays = (
    days: Array<{ date: Dayjs; isCurrentMonth: boolean }>
  ) => {
    const defaultHandle: MonthCalendarProps["selectHandler"] = (value) => {
      console.log(value)
    }
    const handler = selectHandler || defaultHandle
    const rows = []
    for (let i = 0; i < 6; i++) {
      const row = []
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j]
        row[j] = (
          <div
            className={`${
              styled["calendar-month-body-cell"]
            } overflow-hidden flex-1  ${
              item.isCurrentMonth ? "text-black" : "text-[#ccc]"
            }`}
            key={Math.random() * 11}
            onClick={() => handler(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={`calendar-month-body-cell-date`}>
                <div
                  className={`calendar-month-body-cell-date-value ${cs(
                    "calendar-month-body-cell-date-value",
                    value.format("YYYY-MM-DD") ===
                      item.date.format("YYYY-MM-DD")
                      ? "bg-[#1c6dae] flex items-center justify-center w-[48px] h-[48px] text-[#fff] rounded-full cursor-pointer"
                      : ""
                  )}`}
                >
                  {item.date.date()}
                </div>
                <div className="calendar-month-body-cell-date-content">
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        )
      }
      rows.push(row)
    }
    return rows.map((row) => (
      <div
        key={Math.random() * 11}
        className="calendar-month-body-row h-[100px] flex"
      >
        {row}
      </div>
    ))
  }
  const allDays = getAllDays(curMonth, 42)
  return (
    <div className="calendar-month w-full">
      <div
        className={`${styled["calendar-month-week-list"]} flex p-0 w-full box-border`}
      >
        {weekList.map((week) => (
          <div
            className=" px-[16px] py-[20px] text-center text-[#7d7d7f] flex-1"
            key={week}
          >
            {week}
          </div>
        ))}
      </div>
      <div className="calendar-month-body ">{renderDays(allDays)}</div>
    </div>
  )
}

export default MonthCalendar
