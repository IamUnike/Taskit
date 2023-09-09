import { FC, ReactElement } from "react";
import Profile from "../profile/Profile";
import CreateTaskForm from "../createTaskForm/CreateTaskForm";
import { ICreateTaskHandler } from "../../pages/dashboard/Dashboard";

interface ISidebar extends ICreateTaskHandler{}

const Sidebar:FC<ISidebar> = (props):ReactElement => {
    const {createTaskHandler, title, date, description, status, priority, setTitle, setDate, setDescription, setStatus, setPriority} = props
    
    return ( 
        <section className="bg-gray-300 flex justify-center items-center gap-12 flex-col">    
            <Profile name="Harry" />
            <CreateTaskForm 
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
        </section>

     );
}
 
export default Sidebar;