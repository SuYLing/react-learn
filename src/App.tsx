import dayjs from "dayjs"
import Calendar from "~components/Calendar"
function App() {
  const currentDate = dayjs()
  return (
    <>
      <Calendar value={currentDate} className={""}></Calendar>
    </>
  )
}

export default App
