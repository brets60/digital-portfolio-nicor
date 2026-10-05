export function formatManilaTime(date: Date = new Date()): string {
  try {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Manila',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch {
    return date.toLocaleTimeString();
  }
}

export function formatManilaDate(date: Date = new Date()): string {
  try {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'Asia/Manila',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch {
    return date.toLocaleDateString();
  }
}
