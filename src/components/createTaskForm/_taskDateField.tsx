import { FC, ReactElement } from "react";
import { IDateField } from "./interfaces/IDateField";

const TaskDateField:FC<IDateField> = (props):ReactElement => {
  const {
    value = new Date(), 
    disabled = false,
    onChange = (date:Date) => console.log(date)
  } = props  
  
  return (
    <section>
        <input type="date" id="date" className="input" value={value} onChange={onChange} disabled={disabled} />
    </section>
  )
}
 
export default TaskDateField;