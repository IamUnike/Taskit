import { FC, ReactElement } from "react";
import TaskHeader from "./_taskHeader";
import TaskDescription from "./_taskDescription";
import TaskFooter from "./_taskFooter";
import { ITask } from "./interfaces/ITask";
import { renderPriorityBorder } from "../taskCounter/helpers/renderPriorityBorder";

interface ITaskAll extends ITask{
    updateState: (id:any, status: string) => void
}


const Task:FC<ITaskAll> = (props):ReactElement => {
    const {
        title,
        date = new Date(),
        description,
        priority,
        status,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e),
        id,
        updateState
    } = props

    return ( 
        <section className="border border-gray-600 w-5/6 mx-auto flex flex-col justify-center p-2 bg-gray-800 rounded h-30 gap-3" style={{borderColor: renderPriorityBorder(priority || '' )}}>
            
            <TaskHeader title={title} date={date} />
            <TaskDescription description={description} />
            <TaskFooter 
                id={id}
                status={status}
                onClick={onClick} 
                onStatusChange={onStatusChange} 
                updateState={updateState}
            />

        </section>
     );
}

export default Task


