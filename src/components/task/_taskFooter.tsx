import { FC, ReactElement } from "react";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import { Status } from "../createTaskForm/enums/Status";

interface ITaskFooterAll extends ITaskFooter{
    updateState: (id:any, status: string) => void
}

const TaskFooter:FC<ITaskFooterAll> = (props):ReactElement => {
    const {  
        id,
        status,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e), 
        updateState
    } = props

    return ( 
        <section className="flex justify-between items-center">
            <div>
                <input 
                    id="checkbox" 
                    type="checkbox" 
                    onChange={(e) => onStatusChange(e)}
                    onClick={updateState(id, status)}
                    defaultChecked={ status === Status.inProgress }
                />
                
                <label htmlFor="checkbox" className="text-sm"> In Progress </label>
            </div>

            <button className="text-xs text-white bg-green-700 rounded py-1 px-2 titlecase"> Mark Complete </button>
        </section>
     );
}

 
export default TaskFooter;