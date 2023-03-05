import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const dateConverter = (dateStr) => {
  //If 'dateStr' is empty, return it as it is.
  if (!dateStr) {
    return dateStr
  }
  //Otherwise, destructure the string elements and format them according to DD-MM-YYYY.
  const [yyyy, mm, dd] = dateStr.split(/[/:\-T]/);
  return `${dd}-${mm}-${yyyy}`;
}

export const todaysDate = () => {
  //Create a new Date object.
    const date = new Date()
  //Get the day, month and year, and format them in DD-MM-YYYY.
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let currentDate = `${day}-${month}-${year}`
    return currentDate
}

export const getDayOfWeek = (dateString) => {
  //Create an array of weekday names.
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  //Create a new Date object from the passed dateString argument.
  const date = new Date(dateString)
  //Get the UTC day value based on the supplied date, which is used as the index number for the daysOfWeek array.
  const dayOfWeek = daysOfWeek[date.getUTCDay()]
  return dayOfWeek
}

export const hoursToArray = (start, end) => {
  //Create two new Date objects based on the start and end isoStrings passed in as arguments.
  const startDateTime = new Date(start)
  const endDateTime = new Date(end)
  //Create an empty array to store the hour values in.
  const hours = []
  //Loop through every hour between the start and end time, and push the value into the hours array.
  let currentDateTime = new Date(startDateTime)
  while (currentDateTime <= endDateTime) {
    hours.push(currentDateTime.getUTCHours())
    //Add an hour in milliseconds to the currentDateTime object before the next loop iteration.
    currentDateTime.setTime(currentDateTime.getTime() + (60 * 60 * 1000))
  }
  return hours
}


export const arrayToTimeStart = (hoursArray) => {
  //If the 'hoursArray' has zero length, don't do anything.
  if (hoursArray.length === 0) {
    return 
  }
  //Get the first element (earliest hour) of the hoursArray and set a new Date object to that time. The returned ISO timestamp is stored with the .toISOString() method.
  const startHour = hoursArray[0]
  const startDate = new Date()
  startDate.setUTCHours(startHour, 0, 0, 0)
  return startDate.toISOString()
}


export const arrayToTimeEnd = (hoursArray) => {
  //If the 'hoursArray' has zero length, don't do anything.
  if (hoursArray.length === 0) {
    return 
  }
  //Get the last element (latest hour) of the hoursArray and set a new Date object to that time. The returned ISO timestamp is stored with the .toISOString() method.
  const endHour = hoursArray[hoursArray.length - 1]
  const endDate = new Date()
  endDate.setUTCHours(endHour, 0, 0, 0)
  return endDate.toISOString()
}



export const colorHours = (hour) => {
  //Determine the appropriate CSS class name based on the supplied hour number.
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
  //If the phoneNumber string contains anything other than numbers or has more or less chars than 10, return the original value.
  if (isNaN(phoneNumber) || phoneNumber.length > 10 || phoneNumber.length < 10 ) {
    return phoneNumber
  }
  //Otherwise, apply phone format and return.
  else {
    return phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")
  }
}

// Combines roster date with start and end times to create an ISO string timestamp.
export const combineDateTime = (obj) => {
  const { rosterDate, ...rest } = obj;
  const [date] = rosterDate.split('T');
  const start = `${date}T${rest.startTime.split('T')[1]}`;
  const end = `${date}T${rest.endTime.split('T')[1]}`;
  return { start, end };
}

// Converts Australian Eastern Standard Time (AEST) to Coordinated Universal Time (UTC).
export const aestToUTC = (aest) => {
if (!aest) {
  return
}
else {
  return dayjs(aest).add(10, 'hour').toDate().toISOString();
}
}

// Retrieves the hour number from an ISO string timestamp.
export const getHourNumber = (isoString) => {
  const date = new Date(isoString);
  const hours = date.getUTCHours();
  return hours
}

// Returns a formatted ISO string timestamp for the default morning value.
export const defaultMorningValue = () => {
  const date = dayjs().set('hour', 8).set('minute', 0).set('second', 0).set('millisecond', 0);
  return date.toISOString();
};

// Returns a formatted ISO string timestamp for the default night value.
export const defaultNightValue = () => {
  const date = dayjs().set('hour', 18).set('minute', 0).set('second', 0).set('millisecond', 0);
  return date.toISOString();
};

// Matches shift objects to user objects in order to add employee name data to each shift.
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

// Removes quotes from a given string argument.
export const removeQuotes = (str) => {
  return str.replace(/"/g, '');
}