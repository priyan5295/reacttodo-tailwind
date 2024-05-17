import React from 'react'
import TaskCard from './TaskCard'

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className='mt-10'>
        <h2 className='flex items-center font-bold text-xl'>
            <img className='w-[30px] mr-[5px]' src={icon} alt='' />
            {title}
        </h2>

        {tasks.map(
            (task, index) => 
                task.status === status && (
                    <TaskCard
                    key={index}
                    title={task.task}
                    tags={task.tags}
                    handleDelete={handleDelete}
                    index={index}
                    />
                )
        )}
    </section>
  )
}

export default TaskColumn