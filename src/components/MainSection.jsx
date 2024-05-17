import React, { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";
import Heading from "./Heading";
import Todoicon from "../assets/direct-hit.png"
import Doingicon from "../assets/glowing-star.png"
import Doneicon from "../assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks");

const MainSection = () => {

    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task, index) => index !== taskIndex);
        setTasks(newTasks)
    }

    return (
        <>
        <div className="grid grid-rows-3 gap-4">
              <main className="lg:flex flex-row justify-evenly px-[8%]">
                <Heading setTasks={setTasks} />
                <TaskColumn
                    title='To do'
                    icon={Todoicon}
                    tasks={tasks}
                    status='todo'
                    handleDelete={handleDelete}
                />

                <TaskColumn
                    title="Doing"
                    icon={Doingicon}
                    tasks={tasks}
                    status="doing"
                    handleDelete={handleDelete}
                />

                <TaskColumn
                    title="Done"
                    icon={Doneicon}
                    tasks={tasks}
                    status="done"
                    handleDelete={handleDelete}
                />

            </main>
        </div>
        </>
    )
}

export default MainSection