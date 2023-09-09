import { FC, ReactElement } from "react";
import { ITextField } from "./interfaces/ITextField";

const TaskTitleField:FC<ITextField> = (props):ReactElement => {
    const { 
        onChange = (e) => console.log(e), 
        disabled = false
    } = props

    return ( 
        <section>
            <input type="text" id="title" className='input' placeholder="Title" disabled={disabled} onChange={onChange} />
        </section>
     );
}
 
export default TaskTitleField;