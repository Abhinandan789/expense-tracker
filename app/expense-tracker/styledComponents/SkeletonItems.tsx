import * as React from 'react';


export default function SkeletonItems() {
  return (
    <div className="animate-pulse flex items-center justify-between p-2 my-2 bg-gray-200 rounded">
    <div className="flex items-center">
      <div className="h-4 w-20 bg-gray-300 rounded"></div>
      <div className="h-3 w-12 bg-gray-300 rounded ml-2"></div>
    </div>
    <div className="flex items-center">
      <div className="h-4 w-16 bg-gray-300 rounded mr-2"></div>
      <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
    </div>
  </div>
  );
}