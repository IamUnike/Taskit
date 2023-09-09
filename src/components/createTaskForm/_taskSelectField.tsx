import { FC, ReactElement } from "react";
import { ISelectField } from "./interfaces/ISelectField";


const TaskSelectField:FC<ISelectField> = (props):ReactElement => {
    const {
        value = '',
        label = 'select box',
        name,
        items = [{value: '', label: 'Add items'}],
        disabled = false,
        onChange = (e) => console.log(e)
    } = props

    return ( 
        <section>
            <label id={`${name}-id`} className="text-xs"> {label} </label>
          
            <select 
                value={value}   
                name={name} 
                id={`${name}-id-select`} 
                onChange={onChange}
                disabled = {disabled}
                className='input' 
            >
                {
                    items.map((item, index) => (
                        <option key={item.value + index} value={item.value} className="text-sm"> {item.label} </option>
                    ))
                }

            </select>

        </section>
     );
}
 
export default TaskSelectField;