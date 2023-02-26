
export const dateConverter = (dateStr) => {
  const [yyyy, mm, dd, hh, mi] = dateStr.split(/[/:\-T]/);
  return `${dd}-${mm}-${yyyy}`;
}

export const todaysDate = () => {
	const date = new Date()
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()
	let currentDate = `${day}-${month}-${year}`
	return currentDate
}

export const getDayOfWeek = (dateString) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date(dateString)
  const dayOfWeek = daysOfWeek[date.getUTCDay()]
  return dayOfWeek
}

export const hoursToArray = (start, end) => {
  const startDateTime = new Date(start)
  const endDateTime = new Date(end)
  const hours = []
  let currentDateTime = new Date(startDateTime)
  while (currentDateTime <= endDateTime) {
    hours.push(currentDateTime.getUTCHours())
    currentDateTime.setTime(currentDateTime.getTime() + (60 * 60 * 1000))
  }
  return hours
}

export const colorHours = (hour) => {
  if (hour <= 10) {
    return "morningHour"
  }
  else if (hour > 10 && hour < 13 ) {
    return "lateMorningHour"
  }
  else if (hour >= 13 && hour < 16) {
    return "lunchHour"
  }
  else if (hour >= 16 && hour < 19) {
    return "afternoonHour"
  }
  else {
    return "nightHour"
  }
}