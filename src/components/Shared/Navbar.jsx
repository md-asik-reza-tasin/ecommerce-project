import React from "react";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-10 sticky top-0 grid grid-cols-10 ">
      <div className="col-span-2 flex items-start justify-start">Logo</div>
      <div className="col-span-6 flex items-center justify-center">Navigation</div>
      <div className="col-span-2 flex items-end justify-end">User Menu</div>
    </div>
  );
}
