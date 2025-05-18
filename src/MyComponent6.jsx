import React, {useState} from "react"

function MyComponent6() {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleTaskChange(e) {
        setNewTask(e.target.value)
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            setNewTask("")
        }

    }

    function handleDeleteTask(i) {
        const deleteTask = task.filter((element, index) => index !== i)
        setTask(deleteTask)
    }

    function handleMoveTaskUp(i) {
        if (i > 0) {
            const moveTask = [...task];
            [moveTask[i], moveTask[i - 1]] = [moveTask[i -1], moveTask[i]]
            setTask(moveTask)
        }
    }

    function handleMoveTaskDown(i) {
        if (i < task.length - 1) {
            const moveTask = [...task];
            [moveTask[i], moveTask[i + 1]] = [moveTask[i + 1], moveTask[i]]
            setTask(moveTask)
        }
    }

    return (
        <>
            <input type="text" placeholder="Wrote a Task..." onChange={handleTaskChange} value={newTask} id="newTaskID"/>
            <button onClick={handleAddTask} >Create</button>

            <div className="task-container">
                <h3>List of task</h3>
                {task.length > 0 ? 
                task.map((element, index) => 
                <li key={index} className="task-list">
                    <span>
                        {element}
                    </span>
                    <div>
                        <button className="delete-task-button" onClick={() => handleDeleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-task-button" onClick={() => handleMoveTaskUp(index)}>
                            Up
                        </button>
                        <button className="move-task-button" onClick={() => handleMoveTaskDown(index)}>
                            Down
                        </button>
                    </div>
                </li>
                ):
                <p>There is no task!</p>
                }
            </div>
        </>
    )
}

export default MyComponent6