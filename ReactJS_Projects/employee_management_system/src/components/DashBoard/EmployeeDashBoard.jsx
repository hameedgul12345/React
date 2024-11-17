import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskLists from "../TaskList/TaskLists";

function EmployeeDashBoard() {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNumbers />
      <TaskLists/>
    </div>
  );
}

export default EmployeeDashBoard;
