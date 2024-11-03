import { execSync } from 'child_process';

export function getLastCommitDate() {
  try {
    // Get the last commit date in ISO format
    const date = execSync('git log -1 --format=%cI').toString().trim();
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return 'Unknown date';
  }
}