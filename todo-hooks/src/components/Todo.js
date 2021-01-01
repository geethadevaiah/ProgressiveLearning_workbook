import React, { useState } from 'react';
import './Todo.css';

function Task({ task, index, removeTask, completeTask }){
    return (
        <div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.title}
        <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
        <button onClick={() => completeTask(index)}>Complete</button>
        </div>
    );
}

export default function Todo() {
    const [tasks, setTasks] = useState([
        {
            title :"Get groceries",
            completed: true
        },{
            title : "Watch the movies",
            completed: false
        }
    ]);
    const addTask = title => {                                                                                                               
        const newTasks = [...tasks, { title : title, completed: false }];
        setTasks(newTasks);
    };
    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask = {completeTask}
                        removeTask = {removeTask}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

function CreateTask ({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}
