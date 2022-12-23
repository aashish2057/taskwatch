"use client";

import { useState } from "react";

interface TaskList {
    taskList: {
        task: string;
        isDone: boolean;
    }[]
}

export default function TaskList({taskList}: TaskList) {
    const [isDone, setisDone] = useState(false);

    const handleChange = () => {
        setisDone(!isDone)
    }

    console.log(taskList)
    return (
        <div>
            {taskList?.map((t) => 
                <div className="flex flex-row gap-2">
                    <input type="checkbox" onChange={handleChange}/> <ul>{t.task}</ul> <p>{String(isDone)}</p>
                </div>
            )}
        </div>
    )
}