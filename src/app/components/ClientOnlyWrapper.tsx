'use client';

import { useEffect, useState } from 'react';

export default function ClientOnlyWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null on the server and during initial hydration
    // This prevents a mismatch. Adjust styling as needed.
    return null; // Or return a loading spinner/skeleton
  }

  return <>{children}</>;
} 