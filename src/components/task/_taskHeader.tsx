import { FC, ReactElement } from "react";
import { ITaskHeader } from "./interfaces/ITaskHeader";
import format from "date-fns/format";


const TaskHeader:FC<ITaskHeader> = (props):ReactElement => {
    const {
        title, 
        date,
        formattedDate = format(date, 'do MMMM, YYY'),
    } = props

    return ( 
        <section className="flex justify-between items-center">
            <h3> {title} </h3>
            <div className="border rounded-3xl p-1.5 text-xs"> {formattedDate} </div>
        </section>
     );
}
 
export default TaskHeader