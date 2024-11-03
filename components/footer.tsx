'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    fetch('/api/last-commit')
      .then(res => res.json())
      .then(data => setLastUpdate(data.date))
      .catch(() => setLastUpdate('Unknown date'));
  }, []);

  return (
    <footer className="text-center p-6 space-y-2">
      <p className="text-sm text-slate-500">Last updated: {lastUpdate}</p>
      <p>made with ❤️ by <a href="https://github.com/medtty" className="text-slate-400 underline">medtty</a></p>
    </footer>
  );
}