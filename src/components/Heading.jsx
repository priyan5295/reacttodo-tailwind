import React, { useState } from 'react'
import Tag from './Tag'

const Heading = ({ setTasks }) => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    })

    console.log('task data: ', taskData)

    const checkTag = (tag) => {
        return taskData.tags.some((item) => item === tag);
      };
    
      const selectTag = (tag) => {
        if (taskData.tags.some((item) => item === tag)) {
          const filterTags = taskData.tags.filter((item) => item !== tag);
          setTaskData((prev) => {
            return { ...prev, tags: filterTags };
          });
        } else {
          setTaskData((prev) => {
            return { ...prev, tags: [...prev.tags, tag] };
          });
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => {
          return { ...prev, [name]: value };
        });
      };


    const handleSubmit = (e) => {
        e.preventDefault();
       // Check if the task input field is empty, the tags array is empty, or the status is invalid
        if (!taskData.task.trim() || taskData.tags.length === 0 || !["todo", "doing", "done"].includes(taskData.status)) {
            if (!taskData.task.trim()) {
                alert('Input field is empty. Enter your task');
            } else if (taskData.tags.length === 0) {
                alert('Please select at what you have done');
            } else {
                alert('Please select a valid status');
            }
            return;
        }
        console.log(taskData);
        setTasks((prev) => {
          return [...prev, taskData];
        });
        setTaskData({
          task: "",
          status: "todo",
          tags: [],
        });
      };

   
    return (
    <div className='p-5'>
        <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='task'
        placeholder='Enter Your Task'
        value={taskData.task}
        onChange={handleChange}
        className='task_input mb-4 p-2 border border-gray-300 rounded w-full'
        />
        <div className="flex flex-col gap-4 mb-4">
            <div className='flex items-center justify-between'>
            <div>
                <Tag
                 tagName='HTML'
                 selectTag={selectTag}
                 selected={checkTag("HTML")}
                />
                <Tag 
                  tagName='CSS'
                  selectTag={selectTag}
                  selected={checkTag("CSS")}
                />
                <Tag 
                  tagName='Javascript'
                  selectTag={selectTag}
                  selected={checkTag("Javascript")}
                />
                <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
                />
            </div>
            </div>
            {/* {
                categories.map((category, index) => (
                    <div key={category} 
                    style={{ backgroundColor: categoriesColors[index] }}
                    className={`border px-2 py-1 text-white rounded shadow cursor-pointer bg-${categoriesColors[index]}-700`}>
                        {category}
                    </div>
             ))} */}

        <select 
          value={taskData.status}
          name="status"
          onChange={handleChange} 
          className="task_status p-2 border border-gray-300 rounded"
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button  type='submit' className="bg-green-500 text-white p-2 rounded shadow" >
          + Add Task
        </button>
        </div>
        
        </form>
    </div>
  )
}

export default Heading