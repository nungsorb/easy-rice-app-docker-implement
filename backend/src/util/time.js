export function getCurrentLocalTime() {
  let timestamp = new Date();
  const offset = timestamp.getTimezoneOffset();
  timestamp = new Date(timestamp.getTime() - (offset * 60 * 1000));
  
  return timestamp.toISOString();
}

export function getTimestamp(datetime) {
  const [datePart, timePart] = datetime.split('T');
  const formattedDate = datePart.replace(/-/g, '');  
  const formattedTime = timePart.split('.')[0].replace(/:/g, '').slice(0, 6);
  
  return `${formattedDate}-${formattedTime}`;
}