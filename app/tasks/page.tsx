import Link from "next/link";
import { data } from "../data"
import TaskList from "./TaskList";
interface Day {
    day: {
        date: Date;
        completionPercentage: number;
        taskList: {
            task: string;
            isDone: boolean;
        }[];
    }
}

function getDay(date: Date) {
    const weekNum = date.getDay()
    let weekDay;
    if (weekNum === 0) {
        weekDay = "Sunday"
    }
    if (weekNum === 1) {
        weekDay = "Monday"
    }
    if (weekNum === 2) {
        weekDay = "Tuesday"
    }
    if (weekNum === 3) {
       weekDay = "Wensday"
    }
    if (weekNum === 4) {
        weekDay = "Thursday"
    }
    if (weekNum === 5) {
        weekDay = "Friday"
    }
    if (weekNum === 6) {
        weekDay = "Saturday"
    }
    return weekDay;
}


export default function TaskPage() {
    return (
        <div>
            <h1>Tasks</h1>
            <div className="flex flex-row gap-6">
                {data.map((day) => 
                    <div className="p-10">
                        <Day day={day} />
                    </div> 
                )}
            </div>
        </div>
    )
}

function Day({ day }: Day) {
    const {date, completionPercentage, taskList} = day || {};
    return (
        <div>
            <h2>{getDay(date)}</h2>
            <div>
                <TaskList taskList={taskList} />
            </div>
        </div>
    )
}

