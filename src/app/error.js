"use client"; // Error components must be Client Components

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Visual Icon */}
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* Text Content */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Something went wrong!
      </h1>
      <p className="text-gray-500 max-w-md mb-8">
        We encountered an unexpected error. Don't worry, our team has been notified. 
        You can try refreshing the page or head back home.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()} // Next.js provided function to re-render the segment
          className="px-8 py-3 bg-black text-white rounded-xl font-medium hover:opacity-90 transition active:scale-95"
        >
          Try Again
        </button>
        
        <Link
          href="/"
          className="px-8 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition active:scale-95"
        >
          Go Back Home
        </Link>
      </div>

      {/* Error Details (Optional/Admin only) */}
      <div className="mt-12">
        <p className="text-xs text-gray-400 font-mono">
          Error ID: {error?.digest || "internal_server_error"}
        </p>
      </div>
    </div>
  );
}