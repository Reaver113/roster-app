
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

export const arrayToHours = (hoursArray) => {
  if (hoursArray.length === 0) {
    throw new Error("Array must not be empty")
  }
  const startHour = hoursArray[0]
  const endHour = hoursArray[hoursArray.length - 1] + 1
  const startDate = new Date()
  startDate.setUTCHours(startHour, 0, 0, 0)
  const endDate = new Date()
  endDate.setUTCHours(endHour, 0, 0, 0)
  return { start: startDate.toISOString(), end: endDate.toISOString() }
}


export const colorHours = (hour) => {
  if (hour <= 9) {
    return "morningHour"
  }
  else if (hour > 9 && hour < 13 ) {
    return "lunchHour"
  }
  else if (hour >= 13 && hour < 16) {
    return "afternoonHour"
  }
  else if (hour >= 16 && hour < 19) {
    return "lateAfternnoonHour"
  }
  else {
    return "nightHour"
  }
}