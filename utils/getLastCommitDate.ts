import { execSync } from 'child_process';

export function getLastCommitDate() {
  try {
    // Get the last commit date in ISO format
    const date = execSync('git log -1 --format=%cI').toString().trim();
    
    // Create a date formatter for Shanghai timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    //   hour12: false, // Use 24-hour format
    //   timeZoneName: 'short' // Shows timezone abbreviation
    });

    return formatter.format(new Date(date));
  } catch (error) {
    return 'Unknown date';
  }
}