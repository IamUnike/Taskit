import { FC, ReactElement } from "react";
import { ITextField } from "./interfaces/ITextField";

const TaskDescriptionField:FC<ITextField> = (props):ReactElement => {
    const { 
        onChange = (e) => console.log(e), 
        disabled = false
    } = props


    return ( 
        <section>
            <textarea id="description" className="input" placeholder="Description" disabled={disabled} onChange={onChange} />
        </section>
     );
}
 
export default TaskDescriptionField;