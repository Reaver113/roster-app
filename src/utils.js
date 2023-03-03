import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const dateConverter = (dateStr) => {
  if (!dateStr) {
    return dateStr
  }
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

export const arrayToTimeStart = (hoursArray) => {
  if (hoursArray.length === 0) {
    return 
  }
  const startHour = hoursArray[0]
  const startDate = new Date()
  startDate.setUTCHours(startHour, 0, 0, 0)
  return startDate.toISOString()
}

export const arrayToTimeEnd = (hoursArray) => {
  if (hoursArray.length === 0) {
    return 
  }
  const endHour = hoursArray[hoursArray.length - 1]
  const endDate = new Date()
  endDate.setUTCHours(endHour, 0, 0, 0)
  return endDate.toISOString()
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

export const formatPhoneNumber = (phoneNumber) => {
  if (isNaN(phoneNumber) || phoneNumber.length > 10 || phoneNumber.length < 10 ) {
    return phoneNumber
  }
  else {
    return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")
  }
}

export const combineDateTime = (obj) => {
  const { rosterDate, ...rest } = obj;
  const [date] = rosterDate.split('T');
  const start = `${date}T${rest.startTime.split('T')[1]}`;
  const end = `${date}T${rest.endTime.split('T')[1]}`;
  return { start, end };
}


export const aestToUTC = (aest) => {
if (!aest) {
  return
}
else {
  return dayjs(aest).add(10, 'hour').toDate().toISOString();
}
}

export const getHourNumber = (isoString) => {
  const date = new Date(isoString);
  const hours = date.getUTCHours();
  return hours
}

export const defaultMorningValue = () => {
  const date = dayjs().set('hour', 8).set('minute', 0).set('second', 0).set('millisecond', 0);
  return date.toISOString();
};

export const defaultNightValue = () => {
  const date = dayjs().set('hour', 18).set('minute', 0).set('second', 0).set('millisecond', 0);
  return date.toISOString();
};


export const matchNames = (viewingRoster, users) => {
  const matched = viewingRoster.shifts.map(shift => {
    const employee = users.find((user) => {
    return  user._id === shift.employee
    })
    return {
      ...shift,
      name: `${employee.firstName} ${employee.lastName}`
    }
  })
  return matched
}

export const removeQuotes = (str) => {
  return str.replace(/"/g, '');
}