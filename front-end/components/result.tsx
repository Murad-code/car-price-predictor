import React from "react";

function Result({ price }) {
  return (
    <div className="min-h-[50%] p-4 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-4">
          <h1 className="text-xl">Your car is currently worth £{price}</h1>
        </div>
      </div>
    </div>
  );
}

export default Result;
