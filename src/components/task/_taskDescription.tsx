import { FC, ReactElement } from "react";
import { ITaskDescription } from "./interfaces/ITaskDescription";

const TaskDescription:FC<ITaskDescription> = (props):ReactElement => {
    const {description} = props

   return (
        <section>
            <p className="text-sm"> {description} </p>
        </section>    
   )
}
 
export default TaskDescription