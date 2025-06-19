import React from "react";

export default function SkeletonCharlaCard() {
  return (
    <div className="flex w-full animate-pulse gap-[10px] rounded-[20px] bg-gray-100 p-4">
      {/* Left section 1/3 */}
      <div className="h-[266px] w-1/3 rounded-[20px] bg-gray-200" />
      {/* Right section 2/3 */}
      <div className="flex w-2/3 flex-1 flex-col justify-between rounded-[20px] bg-gray-200 p-4">
        <div className="mb-4 h-6 w-2/3 rounded bg-gray-300" />
        <div className="mb-2 h-4 w-1/2 rounded bg-gray-300" />
        <div className="h-4 w-1/3 rounded bg-gray-300" />
      </div>
    </div>
  );
}
