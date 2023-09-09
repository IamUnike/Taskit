import { FC, ReactElement } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Taskarea from "../../components/taskarea/Taskarea";
import { ICreateTask } from "../../components/taskarea/interfaces/ICreateTask";


interface ITaskArea {
    getTasks?: () => void
}

export interface ICreateTaskHandler extends ICreateTask{
    createTaskHandler: () => void
}

interface IDashboard extends ITaskArea, ICreateTaskHandler{}

const Dashboard:FC<IDashboard>  = (props): ReactElement => {
    const { createTaskHandler, title, date, description, status, priority, setTitle, setDate, setDescription, setStatus, setPriority} = props

    return (
        <div className="grid grid-cols-3 h-screen">
           
           <Taskarea  />
           <Sidebar
                 createTaskHandler={createTaskHandler}
                 title={title}
                 description={description}
                 date={date}
                 status={status}
                 priority={priority} 
                 setTitle={setTitle}  
                 setDate={setDate}
                 setDescription={setDescription}
                 setStatus={setStatus}
                 setPriority={setPriority}
           />
          
        </div>
    )  
}
 
export default Dashboard;