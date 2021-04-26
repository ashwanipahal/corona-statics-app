/**
 * Returns a formatted date dd/mm/yyyy
 * @param {dateString} input inputFormat
 */
export const convertDate = (inputFormat) => {
  function pad(s) {
    return s < 10 ? '0' + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
};
