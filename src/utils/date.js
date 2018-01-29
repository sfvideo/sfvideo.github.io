const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const parseDate = (date) => {
  const parsed = new Date(date);
  return {
    date: parsed.toLocaleDateString('en-us'),
    time: parsed.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
    month: monthNames[parsed.getMonth()],
  }
}

export { parseDate };
