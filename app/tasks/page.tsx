import Link from "next/link";
import { data } from "../data"

export default function TaskPage() {
    return (
        <div>
            <h1>Tasks</h1>
            <div>
                {data?.map((day) => {
                    return <Day key={day.date} day={day} />;
                })}
            </div>
        </div>
    )
}

function Day({ day }: any) {
    const {date, completionPercentage, taskList} = day || {};
    console.log(taskList)
    return (
        <Link href={`/tasks/${date}`}>
            <div>
                <h2>{date}</h2>
                <p>{completionPercentage}</p>
                <div>
                    <li>
                        {taskList?.map((t) => {
                            return <div>{t.task}</div>
                        })}
                    </li>
                </div>
            </div>
        </Link>
    )
}
