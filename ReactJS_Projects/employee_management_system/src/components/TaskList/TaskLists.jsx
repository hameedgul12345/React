import React from "react";

function TaskLists() {
  return (
    <div
      id="tasklist"
      className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap  py-1 mt-16'
    >
      <div className="flex-shrink-0 p-5 h-full w[300px] bg-red-400 rounded">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
          <h4>11/14/2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make Video</h2>
      <p>By checking these points, you should resolve the invalid type warning. Let me know if there are other issues!</p>
      </div>
      
    </div>
  );
}

export default TaskLists
