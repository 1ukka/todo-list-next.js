// pages/todo.tsx
'use client'
import React, { useState } from 'react';

interface Task {
  text: string;
  id: number;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj: Task = { text: newTask, id: Date.now() };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='text-center'>
      <h1 className='text-sky-400 text-6xl p-9'>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className='border-2 border-sky-400 rounded-lg p-2'
      />
      <button onClick={handleAddTask} className=' bg-blue-500 rounded p-3 ml-2'>Add</button>
      <ul className=' mt-6 rounded'>
        {tasks.map((task) => (
          <li className='bg-blue-400 p-1' key={task.id}>
            {task.text}
            <button className='bg-red-500 text-white py-2 px-4 rounded p-1 ml-5' onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
