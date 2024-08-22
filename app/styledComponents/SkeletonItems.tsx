import * as React from 'react';


export default function SkeletonItems() {
  return (
    <div className="mx-auto flex max-w-full w-full animate-pulse space-x-4 rounded-lg border p-4 shadow-sm">
      <div className="grow space-y-2 py-1">
        <div className="h-4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[70%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </div>
  );
}