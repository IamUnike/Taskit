import { FC, ReactElement } from "react";
import { ITaskCounter } from "./interfaces/ITaskCounter";
import { emitCorrectBorderColor } from "./helpers/emitCorrectBorderColor";
import { emitCorrectLabel } from "./helpers/emitCorrectLabel";
import { Status } from "../createTaskForm/enums/Status";

const TaskCounter:FC<ITaskCounter> = (props): ReactElement => {
    const {
        count,
        status = Status.completed,
    } = props

    const borderColor = status ? emitCorrectBorderColor(status) : ""; // Provide a default empty string

    return ( 
        <section>
            <div className="grid grid-cols-1 place-items-center gap-2">
                <div className="w-20 h-20 rounded-full border-2 flex justify-center items-center" style={{borderColor: borderColor}}> 
                    <h2 className="text-xl font-bold"> {count} </h2>
                 </div>

                <p className="text-sm"> {status ? emitCorrectLabel(status) : ""} </p>
            </div>
            
        </section>
     );
}
 
export default TaskCounter;