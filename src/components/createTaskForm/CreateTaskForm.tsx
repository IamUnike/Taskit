import { FC, ReactElement } from "react";
import TaskDescriptionField from "./_taskDescriptionField";
import TaskTitleField from "./_taskTitleField";
import TaskDateField from "./_taskDateField";
import TaskSelectField from "./_taskSelectField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";

//react icons
import { IoMdCheckboxOutline } from 'react-icons/io';
import Loader from "../loader/Loader";
import { ICreateTaskHandler } from "../../pages/dashboard/Dashboard";

interface ICreateTaskForm extends ICreateTaskHandler{}

const CreateTaskForm:FC<ICreateTaskForm> = (props):ReactElement => {
    const {
        createTaskHandler, 
        title,
        date,
        description, 
        status,
        priority,
        setTitle, 
        setDate, 
        setDescription, 
        setStatus, 
        setPriority
    } = props

    return ( 
        <section className="w-5/6 mx-auto">
            <div className="w-full bg-green-700 flex item-center gap-2 text-white p-4 mb-2 rounded "> 
                <IoMdCheckboxOutline /> 
                <p className="text-sm text-white"> Success </p> 
            </div>

            <h2 className="text mb-2"> Create a Task </h2>

            <TaskTitleField onChange={(e) => {setTitle?.(e.target.value)} } />

            <TaskDescriptionField onChange={ (e) => {setDescription?.(e.target.value)} } />

            <TaskDateField value={date} onChange={(e:any) => setDate(e.target.value)} />

            <div className="grid grid-cols-2 gap-4">
                <TaskSelectField 
                    label='status'
                    name='status'
                    value={status}
                    onChange={(e) => setStatus?.(e.target.value)}
                    items={[
                        {
                            value: Status.todo,
                            label: Status.todo.toUpperCase(),   
                        },
                        {
                            value: Status.inProgress,
                            label: Status.inProgress.toUpperCase(), 
                        }
                    ]}
                />
                <TaskSelectField 
                    label='Priority'
                    name='priority'
                    value={priority}
                    onChange={(e) => setPriority?.(e.target.value)}
                    items={[
                       {
                           value: Priority.low,
                           label: Priority.low,   
                       },
                       {
                            value: Priority.normal,
                            label: Priority.normal,   
                        },
                        {
                            value: Priority.high,
                            label: Priority.high,   
                        },
                    ]}
                />
            </div>

            <Loader />
          
            <button 
                className="text-xs font-poppins bg-purple-800 p-2 text-center uppercase mt-3 text-white rounded w-full"
                onClick={createTaskHandler} 
                disabled={
                !title || !description || !date || !status || !priority
            }> 
                create a task 
            </button>
            
        </section>
     );
}
 
export default CreateTaskForm;


