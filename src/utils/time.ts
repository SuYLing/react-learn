import { Dayjs } from "dayjs"

export const getAllDays = (date: Dayjs, size: number) => {
  const startDate = date.startOf("month") // 设置为本月1日上午 12:00
  const day = startDate.day() - 1 // 获取本月开始是星期几, 如果第一天是周一则-1；周日则直接使用
  const daysInfo: Array<{ date: Dayjs; isCurrentMonth: boolean }> = new Array(
    size
  ) // 固定 7个星期

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      isCurrentMonth: false, // 是否是属于本月日期
      date: startDate.subtract(day - i, "day"),
      //填充以本月开始的前几天数据
    }
  }
  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day")
    daysInfo[i] = {
      date: startDate.add(i - day, "day"),
      isCurrentMonth: calcDate.month() === date.month(), // 是否是本月
    }
  }
  return daysInfo
}
