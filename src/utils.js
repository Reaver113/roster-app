/**
 * dateConverter
 * 
 * @param {string} dateStr date string 
 * @returns {String} Returns a cool string
 */
export const dateConverter = (dateStr) => {
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
}