
export const dateConverter = (dateStr) => {
	if (!dateStr) {
    return 
  }
  const [yyyy, mm, dd, hh, mi] = dateStr.split(/[/:\-T]/);

  return `${dd}-${mm}-${yyyy}`;
};

export const todaysDate = () => {
	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let currentDate = `${day}-${month}-${year}`;
	return currentDate
};

export const getDayOfWeek = (dateString) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  return dayOfWeek;
}